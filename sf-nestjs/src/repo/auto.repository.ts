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
    return await repository.findOne({ where: { ['id']: id } });
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
    const repository = getRepository(Autos);
    return await repository.findOne({        
      relations:['photoName'],
      where:{['id']:id}
    });
  }



  async filterAuto(startDate: Date, endDate: Date) {
    console.log(startDate, endDate);
    const repository = getRepository(Autos);
    return await repository.find({
      where: {
        ['arenda.startDay']: startDate,
      },
    });
  }
}
