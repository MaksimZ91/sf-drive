import { Injectable } from "@nestjs/common";
import { getMongoManager, ObjectID } from "typeorm";
import { Autos } from '../entites/auto.entity'



@Injectable()
export class AutoService{



  async getAll(){
    const manager = getMongoManager()
    return manager.find(Autos)
  }

  async getOne(id){
    const manager = getMongoManager()
    return manager.findOne(Autos, {})
  }

}