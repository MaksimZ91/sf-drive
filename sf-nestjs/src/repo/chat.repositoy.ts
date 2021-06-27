import { Injectable } from "@nestjs/common"
import { Messages } from "../entites/messages.entity";
import { getRepository } from "typeorm"



Injectable()
export class ChatRepository{
  async SaveMessage(messages:Messages) {   
    const repository = getRepository(Messages);
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