import { Injectable } from '@nestjs/common';
import { UpdateArendaDto } from 'src/dto/updateArenda.dto';
import { Arenda } from 'src/entites/arenda.entity';
import { getRepository } from 'typeorm';

Injectable();
export class ArendaRepository {
  async SaveArenda(arenda: Arenda) {
    const repository = getRepository(Arenda);
    return await repository.save(arenda);
  }

 async findeAllArendaRande (startDay:Date, endDay:Date, id:number, bookingTime:Date){
   return await getRepository(Arenda)
   .createQueryBuilder('arenda')
   .leftJoinAndSelect('arenda.auto', 'auto')   
   .where('auto.id =:id AND arenda.startDay  BETWEEN :begin AND :end', {
    begin: new Date(startDay),
    end: new Date(endDay),
    id:id
  })
  .orWhere('auto.id =:id AND arenda.endDay  BETWEEN :begin AND :end', {
    begin: new Date(startDay),
    end: new Date(endDay),
    id:id
  })
  .orWhere('auto.id =:id AND :begin  BETWEEN arenda.startDay AND arenda.endDay', {
    begin: new Date(startDay),
    end: new Date(endDay),
    id:id
  })
  .orWhere('auto.id =:id AND :end BETWEEN arenda.startDay AND arenda.endDay', {
    begin: new Date(startDay),
    end: new Date(endDay),
    id:id
  })  
  .getMany();
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

  async findeBookingArenda(id:number , status:string, date:Date){
    return await getRepository(Arenda)
    .createQueryBuilder('arenda')
    .leftJoinAndSelect('arenda.user', 'user')
    .leftJoinAndSelect('arenda.auto', 'auto')
    .where('auto.id =:id', { id: id })
    .andWhere('arenda.status =:status', { status: status })
    .getMany()
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
