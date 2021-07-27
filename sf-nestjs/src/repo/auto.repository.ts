import { Injectable } from '@nestjs/common';
import { Autos } from '../entites/auto.entity';
import { getRepository } from 'typeorm';

Injectable();
export class AutoRepository {
  async SaveAuto(auto: Autos) {
    const repository = getRepository(Autos);
    return await repository.save(auto);
  }

  async FindOneByID(id: string) {
    return await getRepository(Autos)
      .createQueryBuilder('auto')
      .leftJoinAndSelect('auto.user', 'user')
      .leftJoinAndSelect('auto.arenda', 'arenda')
      .leftJoinAndSelect('auto.options', 'options')
      .where('auto.id = :id', { id: id })
      .getOne();
  }

  async FindOneByNumber(number: string) {
    const repository = getRepository(Autos);
    return await repository.findOne({ where: { ['number']: number } });
  }

  async FindAll() {
    const repository = getRepository(Autos);
    const autos =  await repository.find();
    return autos
  }

  async FindePhotoByID(id: string) {
    return await getRepository(Autos)
      .createQueryBuilder('auto')
      .leftJoinAndSelect('auto.photoName', 'photoName')
      .where('auto.id = :id', { id: id })
      .getOne();
  }
  
  async FindeAllByType(type: string) {
    return await getRepository(Autos)
      .createQueryBuilder('auto')
      .leftJoinAndSelect('auto.user', 'user')
      .leftJoinAndSelect('auto.arenda', 'arenda')
      .where('type =:type', { type: type })
      .getMany();
      }

  async filterAuto(startDate: Date, endDate: Date,) {
    return await getRepository(Autos)
      .createQueryBuilder('auto')
      .leftJoinAndSelect('auto.arenda', 'arenda')
      .leftJoinAndSelect('auto.user', 'user')
      .where('arenda.startDay  BETWEEN :begin AND :end', {
        begin: new Date(startDate),
        end: new Date(endDate),
      })
      .orWhere('arenda.endDay  BETWEEN :begin AND :end', {
        begin: new Date(startDate),
        end: new Date(endDate),
      })
      .orWhere(':begin  BETWEEN arenda.startDay AND arenda.endDay', {
        begin: new Date(startDate),
        end: new Date(endDate),
      })
      .orWhere(':end BETWEEN arenda.startDay AND arenda.endDay', {
        begin: new Date(startDate),
        end: new Date(endDate),
      })      
      .getMany();
  }
}
