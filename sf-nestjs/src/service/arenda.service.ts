import { Injectable, NotFoundException } from "@nestjs/common";
import { ArendaDtO } from "src/dto/arenda.dto";
import { Arenda } from "src/entites/arenda.entity";
import { ChatEntity } from "src/entites/chat.entity";
import { MessagesEntity } from "src/entites/messages.entity";
import { ArendaRepository } from "src/repo/arenda.repository";
import { AutoRepository } from "src/repo/auto.repository";
import { ChatRepository } from "src/repo/chat.repositoy";
import { UserRepository } from "src/repo/user.repository";




@Injectable()
export class ArendaService {
    constructor ( private arendaRepository:ArendaRepository,
        private autoRepository: AutoRepository,
        private userRepository: UserRepository,
        private chatRepository: ChatRepository
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
        const chat = await this.chatRepository.findeAllChats(auto.user.id) 
        const message = new MessagesEntity(addArenda.coment)     
        arenda.user = user
        arenda.auto = auto;     
        if(!chat){ 
            const newChat =  new ChatEntity()
            newChat.user = user
            newChat.toUser = auto.user
            message.chat = newChat
            await this.chatRepository.SaveChat(newChat)
            await this.chatRepository.SaveMessage(message)   
        } else {
            message.toUser = auto.user
            message.user = user    
            message.chat = chat
            await this.chatRepository.SaveMessage(message)  
            await this.chatRepository.SaveChat(chat)  

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
}