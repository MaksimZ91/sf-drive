import { Injectable } from '@nestjs/common';
import { Arenda } from 'src/entites/arenda.entity';
import { Between, getRepository, Like, Not } from 'typeorm';

Injectable();
export class ArendaRepository {
  async SaveArenda(arenda: Arenda) {
    const repository = getRepository(Arenda);
    return await repository.save(arenda);
  }

  async findeHistoryArenda(id: string) {
    return await getRepository(Arenda)
      .createQueryBuilder('arenda')
      .leftJoinAndSelect('arenda.user', 'user')
      .leftJoinAndSelect('arenda.auto', 'auto')
      .where('user.id =:id', { id: id })
      .getMany();
      }
}
