import { Injectable } from '@nestjs/common';
import { Arenda } from 'src/entites/arenda.entity';
import { getMongoRepository } from 'typeorm';

Injectable();
export class ArendaRepository {
  async SaveArenda(arenda: Arenda) {
    const repository = getMongoRepository(Arenda);
    return await repository.save(arenda);
  }
}
