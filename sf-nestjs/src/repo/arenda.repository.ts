import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';
import { UpdateArendaDto } from 'src/dto/updateArenda.dto';
import { Arenda } from 'src/entites/arenda.entity';
import { getRepository } from 'typeorm';

Injectable();
export class ArendaRepository {
  async SaveArenda(arenda: Arenda) {
    const repository = getRepository(Arenda);
    return await repository.save(arenda);
  }

  async findeHistoryArendaByID(id: string) {
    return await getRepository(Arenda)
      .createQueryBuilder('arenda')
      .leftJoinAndSelect('arenda.user', 'user')
      .leftJoinAndSelect('arenda.auto', 'auto')
      .where('user.id =:id', { id: id })
      .getMany();
      }

  async findeArendaDyID(id:string){
    return await getRepository(Arenda)
    .createQueryBuilder('arenda')
    .leftJoinAndSelect('arenda.user', 'user')
    .leftJoinAndSelect('arenda.auto', 'auto')
    .where('arenda.id =:id', { id: id })
    .getOne()
  } 
  
  
  async findeAndDeleteArenda (id:string){
    return await getRepository(Arenda)
    .createQueryBuilder('arenda')
    .delete()
    .from(Arenda)
    .where('arenda.id =:id', { id: id })
    .execute()
  } 
  
  
  async findeAndUpdate (updateArenda:UpdateArendaDto){ 
    return await getRepository(Arenda)
    .createQueryBuilder('arenda')
    .update(Arenda)
    .set({ 
      status :  updateArenda.status
  })
    .where('arenda.id =:id', { id: updateArenda.arendaID })  
    .execute()
    }
}
