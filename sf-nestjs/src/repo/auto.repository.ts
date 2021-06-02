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
      relations:['user', 'arenda', 'options'],
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
  
  async filterAuto(startDate: string, endDate: string, type:string) {
    return await getRepository(Autos)
    .createQueryBuilder('auto') 
    .leftJoinAndSelect('auto.arenda', 'arenda')
    .where('arenda.startDay NOT BETWEEN :begin AND :end', { begin: new Date(startDate), end: new Date(endDate)})
    .andWhere('arenda.endDay NOT BETWEEN :begin AND :end', { begin: new Date(startDate), end: new Date(endDate)})
    .andWhere(':begin NOT BETWEEN arenda.startDay AND arenda.endDay',{begin: new Date(startDate), end: new Date(endDate)})
    .andWhere(':end NOT BETWEEN arenda.startDay AND arenda.endDay',{begin: new Date(startDate), end: new Date(endDate)})
    .andWhere('type =:type', {type:type})  
    .getMany()
  }
}

  

