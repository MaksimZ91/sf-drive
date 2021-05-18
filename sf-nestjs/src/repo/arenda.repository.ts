import { Injectable } from '@nestjs/common';
import { Arenda } from 'src/entites/arenda.entity';
import { getRepository } from 'typeorm';

Injectable();
export class ArendaRepository {
  async SaveArenda(arenda: Arenda) {
    const repository = getRepository(Arenda);
    return await repository.save(arenda);
  }

  async filterAuto(startDate: Date, endDate: Date) {
    console.log(startDate, endDate);
    return await getRepository(Arenda)
    .createQueryBuilder('arenda')
    .leftJoinAndSelect('arenda.auto', 'auto')
    .where('arenda.startDay =:startDay', {startDay:new Date(startDate)})
    .getOne()
  }
}
