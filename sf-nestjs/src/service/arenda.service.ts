import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { ArendaDtO } from "../dto/arenda.dto";
import { UpdateArendaDto } from "../dto/updateArenda.dto";
import { Arenda } from "../entites/arenda.entity";
import { ChatEntity } from "../entites/chat.entity";
import { MessagesEntity } from "../entites/messages.entity";
import { ArendaRepository } from "../repo/arenda.repository";
import { AutoRepository } from "../repo/auto.repository";
import { ChatRepository } from "../repo/chat.repositoy";
import { UserRepository } from "../repo/user.repository";
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
        const bookingStatus = 'created'
        const date = new Date
        const blockMinuts = 30
        date.setMinutes(date.getMinutes() + blockMinuts) 
        const arenda = new Arenda(
          addArenda.startDay,
          addArenda.endDay,
          addArenda.cost,
          addArenda.coment,
          addArenda.babyChair,
          addArenda.deliveryAuto,
          addArenda.close,
          addArenda.fullTank);
        arenda.status =  bookingStatus
        arenda.bookingTime = date  
        const auto = await this.autoRepository.FindOneByID(addArenda.newAuto);
        const user = await this.userRepository.FindOneByID(addArenda.user) 
        arenda.user = user
        arenda.auto = auto   
        const booking = await this.arendaRepository.findeAllArendaRande(addArenda.startDay, addArenda.endDay, auto.id, date )       
        if(booking.length > 0){            
            const currentTime = new Date
            booking.forEach((e) => {
             if(!(e.status == bookingStatus)){                 
                throw new HttpException('The car was already booked at that time!', HttpStatus.BAD_REQUEST) 
             }else if(e.status == bookingStatus && e.bookingTime > currentTime){               
                throw new HttpException('The car was already booked at that time!', HttpStatus.BAD_REQUEST) 
             }                 
            this.arendaRepository.findeAndDeleteArenda(e.id.toString())
            })            
        }
        await this.arendaRepository.SaveArenda(arenda)
        const usersChats = await this.chatRepository.findeAllChats(user.id, auto.user.id)        
        const message = new MessagesEntity(addArenda.coment, user, auto.user)
        const systemMessage = new MessagesEntity(bookingStatus, user, auto.user) 
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