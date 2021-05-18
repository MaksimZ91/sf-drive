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
    const repository = getRepository(Arenda)   
    const data = repository.find({  
      relations:['auto'],   
      where:{ startDay:Not(Between(new Date(startDate), new Date(endDate))),
              endDay:Not(Between(new Date(startDate), new Date(endDate))),
              auto:{type:"Э"}}
    })  
      
  }
}

