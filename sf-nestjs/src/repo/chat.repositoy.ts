import { Injectable } from "@nestjs/common"
import { MessagesEntity } from "../entites/messages.entity";
import { getRepository } from "typeorm"



Injectable()
export class ChatRepository{
  async SaveMessage(messages:MessagesEntity) {   
    const repository = getRepository(MessagesEntity);
    return await repository.save(messages);
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
        createdAt: 'DESC',
      },
    })
  }
}