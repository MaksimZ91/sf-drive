import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMessageDto } from 'src/dto/createMessge.dto';
import { Messages } from 'src/entites/messages.entity';
import { UserRepository } from 'src/repo/user.repository';
import { ChatRepository } from '../repo/chat.repositoy';

@Injectable()
export class ChatService {
  constructor (private readonly chatRepository:ChatRepository,
              private readonly userRepository:UserRepository
    ){}

 /* async findeAll(id:string){
    return await this.chatRepository.findeAll(id)
  }*/

  async create(user:any,createMessageDto:CreateMessageDto, ){   
    const toUser = await this.userRepository.FindOneByID( createMessageDto.toUserId);
    if (!toUser) {
      throw new HttpException(
        `User ${createMessageDto.toUserId} not found`,
        HttpStatus.NOT_FOUND,
      );
    }  
    try {
      const newMessage = new Messages (createMessageDto.body)
      newMessage.user=user
      newMessage.toUser=toUser      
      return await this.chatRepository.SaveMessage(newMessage);
      
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
