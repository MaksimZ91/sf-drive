import { Injectable } from "@nestjs/common"
import { MessagesEntity } from "../entites/messages.entity";
import { getRepository } from "typeorm"
import { ChatEntity } from "src/entites/chat.entity";



Injectable()
export class ChatRepository{
  async SaveMessage(messages:MessagesEntity) {   
    const repository = getRepository(MessagesEntity);
    return await repository.save(messages);
  }


  async SaveChat(chat:ChatEntity) {   
    const repository = getRepository(ChatEntity);
    return await repository.save(chat);
  }

  async findeAllChats (user:number, selectUser:number){
    const repository = getRepository(ChatEntity) 
    return await repository.findOne({
      relations: ['user', 'toUser'],
      where: [
       {
          ['user']: selectUser,
          ['toUser']: user,
        },
        {
          ['user']: user,
          ['toUser']: selectUser,
        }
      ]
    })
  }

  async findeChatToUser(user:number, selectUser:number){
    const repository = getRepository(ChatEntity) 
    return await repository.findOne({
      relations: ['user', 'toUser'],
      where: [
       {
          ['user']: selectUser,
          ['toUser']: user,
        }       
      ]
    })
  }

 async findeAllUserChat (userId:string){
    const repository = getRepository(ChatEntity)
    return await repository.find({
      relations: ['toUser'],
      where:{ ['user']: userId }})
  }

  async findeAll (user:string, selectUser:string){
    const repository = getRepository(MessagesEntity)
    return await repository.find({
      relations: ['user', 'toUser'],
      where: [
        {
          ['user']: user,
          ['toUser']: selectUser,
        },
        {
          ['user']: selectUser,
          ['toUser']: user,
        },
      ],
      order: {
        createdAt: 'ASC',
      },
    })
  }
}