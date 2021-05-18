import { Injectable } from '@nestjs/common';
import { Arenda } from 'src/entites/arenda.entity';
import { Between, getRepository, Not } from 'typeorm';

Injectable();
export class ArendaRepository {
  async SaveArenda(arenda: Arenda) {
    const repository = getRepository(Arenda);
    return await repository.save(arenda);
  }

  async filterAuto(startDate: Date, endDate: Date) {
    const repository = getRepository(Arenda)
    return await repository.findOne({
      relations:['auto'],
      where:{startDay:Not(Between(new Date(startDate), new Date(endDate)))}})   
  }
}
/* .createQueryBuilder('arenda')
    .leftJoinAndSelect('arenda.auto', 'auto')
    .where('arenda.startDay =:startDay', {startDay:new Date(startDate)})
    .getOne()*/
