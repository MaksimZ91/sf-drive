import { Injectable, NotFoundException } from "@nestjs/common";
import { ArendaDtO } from "src/dto/arenda.dto";
import { UpdateArendaDto } from "src/dto/updateArenda.dto";
import { Arenda } from "src/entites/arenda.entity";
import { ChatEntity } from "src/entites/chat.entity";
import { MessagesEntity } from "src/entites/messages.entity";
import { ArendaRepository } from "src/repo/arenda.repository";
import { AutoRepository } from "src/repo/auto.repository";
import { ChatRepository } from "src/repo/chat.repositoy";
import { UserRepository } from "src/repo/user.repository";
import { ChatService } from "./chat.service";




@Injectable()
export class ArendaService {
    constructor ( private arendaRepository:ArendaRepository,
        private autoRepository: AutoRepository,
        private userRepository: UserRepository,
        private chatRepository: ChatRepository,
        private readonly chatService: ChatService
        ){}

    async createArenda(addArenda: ArendaDtO) {
        const arenda = new Arenda(
          addArenda.startDay,
          addArenda.endDay,
          addArenda.cost,
          addArenda.coment,
          addArenda.babyChair,
          addArenda.deliveryAuto,
          addArenda.close,
          addArenda.fullTank
          );    
        const auto = await this.autoRepository.FindOneByID(addArenda.newAuto);
        const user = await this.userRepository.FindOneByID(addArenda.user)  
        arenda.status = 'confirm'
        arenda.user = user
        arenda.auto = auto     
        await this.arendaRepository.SaveArenda(arenda)   
        const usersChats = await this.chatRepository.findeAllChats(user.id, auto.user.id)        
        const message = new MessagesEntity(addArenda.coment, user, auto.user)
        const systemMessage = new MessagesEntity('confirm', user, auto.user) 
        systemMessage.system = true
        systemMessage.arendaID = arenda.id
        arenda.user = user
        arenda.auto = auto; 
        if(!usersChats){ 
            const newUserChat =  new ChatEntity(user, auto.user) 
            const newTOUserChat =  new ChatEntity(auto.user, user)          
            message.chat = newUserChat
            await this.chatRepository.SaveChat(newUserChat)
            await this.chatRepository.SaveChat(newTOUserChat)
            await this.chatRepository.SaveMessage(message) 
            await this.chatRepository.SaveMessage(systemMessage)  
        } else {           
            message.chat = usersChats
            await this.chatRepository.SaveMessage(message)  
            await this.chatRepository.SaveChat(usersChats)  
            await this.chatRepository.SaveMessage(systemMessage) 
        } 
        return {message, arenda}
      }
                
    async userArendaHistory (id:string){  
        const history = await this.arendaRepository.findeHistoryArendaByID(id)
        if(history){
            return history
        }
        throw new NotFoundException (`History by ${id} not found!`)
    }

    async findeArendaByID(id:string){        
        const arenda = await this.arendaRepository.findeArendaDyID(id)
        if (arenda){
            return arenda
        }
        throw new NotFoundException (`Arenda ${id} not found!`)
    }   
    
    async deleteArenda(id:string){        
        const arenda = await this.arendaRepository.findeArendaDyID(id)
        if (!arenda){
            throw new NotFoundException (`Arenda ${id} not found!`) 
        }
        if (this.arendaRepository.findeAndDeleteArenda(id)){
            return arenda
        }
        throw new Error ('Can`t delete arenda!')
    }


    async findeAndUpdateArenda( updateArenda:UpdateArendaDto){
        await this.arendaRepository.findeAndUpdate(updateArenda)
        const user = await this.userRepository.FindOneByID(updateArenda.user)  
        const toUser = await this.userRepository.FindOneByID(updateArenda.toUser) 
        const arenda = await this.arendaRepository.findeArendaDyID(updateArenda.arendaID)
        const systemMessage = new MessagesEntity(updateArenda.status, user, toUser) 
        systemMessage.system = true
        systemMessage.arendaID = arenda.id           
        return await this.chatRepository.SaveMessage(systemMessage)     

    }
}