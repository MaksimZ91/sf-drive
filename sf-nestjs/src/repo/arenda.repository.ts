import { Injectable } from '@nestjs/common';
import { Arenda } from 'src/entites/arenda.entity';
import { Between, getRepository, Like, Not } from 'typeorm';

Injectable();
export class ArendaRepository {
  async SaveArenda(arenda: Arenda) {
    const repository = getRepository(Arenda);
    return await repository.save(arenda);
  }

  async filterAuto(startDate: Date, endDate: Date) {
    return await getRepository(Arenda)
    .createQueryBuilder('arenda') 
    .leftJoinAndSelect('arenda.auto', 'auto')
    .where('startDay NOT BETWEEN :begin AND :end', { begin: new Date(startDate), end: new Date(endDate)})
    .andWhere('endDay NOT BETWEEN :begin AND :end', { begin: new Date(startDate), end: new Date(endDate)})
    .andWhere(':begin NOT BETWEEN startDay AND endDay',{begin: new Date(startDate), end: new Date(endDate)})
    .andWhere(':end NOT BETWEEN startDay AND endDay',{begin: new Date(startDate), end: new Date(endDate)})
    .andWhere('auto.type =:type', {type:'Грузовой'})
    .select('auto')
    .getRawMany()
  }
}


