import { Injectable } from '@nestjs/common';
import { Autos } from '../entites/auto.entity';
import { Between, getMongoRepository, getRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

Injectable();
export class AutoRepository {
  async SaveAuto(auto: Autos) {
    const repository = getRepository(Autos);
    return await repository.save(auto);
  }


  async FindOneByID(id: string) {
    const repository = getRepository(Autos);
    return await repository.findOne({
      relations:['user'],
       where: { ['id']: id } });
  }

  async FindOneByNumber(number: string) {
    const repository = getRepository(Autos);
    return await repository.findOne({ where: { ['number']: number } });
  }

  async FindAll() {
    const repository = getRepository(Autos);
    return await repository.find();
  }

  async FindePhotoByID(id: string) {
    return await getRepository(Autos)
    .createQueryBuilder("auto")
    .leftJoinAndSelect('auto.photoName', 'photoName')
    .where("auto.id = :id", { id: id })       
    .getOne();
  }

  
}
