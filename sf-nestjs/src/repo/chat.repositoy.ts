import { Injectable } from "@nestjs/common"
import { MessagesEntity } from "../entites/messages.entity";
import { getRepository } from "typeorm"



Injectable()
export class ChatRepository{
  async SaveMessage(messages:MessagesEntity) {   
    const repository = getRepository(MessagesEntity);
    return await repository.save(messages);
  }

 /* async findeAll(id: string){
   return await getRepository(Messages)
   .createQueryBuilder('messages')
   .leftJoinAndSelect('auto.user', 'user')
   .where('auto.id = :id', { id: id })
   .getMany()
  }*/

}