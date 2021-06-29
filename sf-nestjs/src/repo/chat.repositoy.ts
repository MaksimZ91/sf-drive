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

  async findeAllChats (id:number){
    return await getRepository(ChatEntity)
    .createQueryBuilder('chat')
    .leftJoinAndSelect( 'chat.toUser', 'user')
    .where('user.id = :id' ,{id : id})
    .getOne()
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