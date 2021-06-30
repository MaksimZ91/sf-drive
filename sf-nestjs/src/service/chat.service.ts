import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMessageDto } from 'src/dto/createMessge.dto';
import { ChatEntity } from 'src/entites/chat.entity';
import { MessagesEntity } from 'src/entites/messages.entity';
import { UserRepository } from 'src/repo/user.repository';
import { ChatRepository } from '../repo/chat.repositoy';


@Injectable()
export class ChatService {
  public push:(message:MessagesEntity) => void
  constructor (private readonly chatRepository:ChatRepository,
              private readonly userRepository:UserRepository
    ){}


  public attachSendler(sender:(message:MessagesEntity)=> void){
    this.push= sender
  }  

  async findeAll(user:string , selectUser:string){
    return await this.chatRepository.findeAll(user,selectUser)
  }

  async findeAllUserChat(userid:string){
    return await this.chatRepository.findeAllUserChat(userid)
  }

  async create(userId:any,createMessageDto:CreateMessageDto, ){   
    const toUser = await this.userRepository.FindOneByID( createMessageDto.toUserId);
    if (!toUser) {
      throw new HttpException(
        `User ${createMessageDto.toUserId} not found`,
        HttpStatus.NOT_FOUND,
      );
    }  
    try {
      const newMessage = new MessagesEntity(createMessageDto.body, userId, toUser)     
      const UserChats = await this.chatRepository.findeAllChats(userId, toUser.id)
      const ChatToUser = await this.chatRepository.findeChatToUser(userId, toUser.id)
      if(!UserChats){                                        //проверяем есть ли чат у обоих пользователей, если нет создаем чаты
        const newChatUser =  new ChatEntity(userId, toUser) 
        const newChatToUser = new ChatEntity(toUser, userId)
        await this.chatRepository.SaveChat(newChatUser)        
        await this.chatRepository.SaveChat(newChatToUser)       
        newMessage.chat = newChatUser 
        return await this.chatRepository.SaveMessage(newMessage);
      }else if(!ChatToUser){                                        //проверяем есть ли чат у оппонента (допустим если он удалил свой чат), если нет создаем чат
        const newChatToUser = new ChatEntity(toUser, userId)
        await this.chatRepository.SaveChat(newChatToUser)  
        return await this.chatRepository.SaveMessage(newMessage) 
      }else{    
        newMessage.chat = UserChats
        return await this.chatRepository.SaveMessage(newMessage);
      }
    } catch (error) {
      switch (error.code) {
        case 'SQLITE_CONSTRAINT':
          throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        default:
          throw new HttpException(error.message, HttpStatus.NOT_IMPLEMENTED);
      }
    }
  }
}
