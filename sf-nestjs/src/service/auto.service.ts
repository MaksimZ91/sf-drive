import { Injectable } from "@nestjs/common";
import { getMongoManager} from "typeorm";
import { ObjectID } from 'mongodb'
import { Autos } from '../entites/auto.entity'
import {AddAutoDto} from '../dto/add-auto.dto'
import { Users } from "src/entites/user.entity";



@Injectable()
export class AutoService{
  
  async createAuto(addAuto:AddAutoDto){
    const manager = getMongoManager()   
    const newAuto = new Autos
    const currentUser = await manager.findOne(Users,{_id:new ObjectID(addAuto.userId) })
    newAuto.mark=addAuto.mark
    newAuto.model=addAuto.model
    newAuto.number=addAuto.number
    newAuto.user=currentUser
    currentUser.autos=newAuto
    await manager.save(currentUser)
    await manager.save(newAuto)
    return { message:"Ok"} 

  }



  async getAll(){
    const manager = getMongoManager()
    return manager.find(Autos)
  }

  async getOne(id){
    const manager = getMongoManager()
    return manager.findOne(Autos, {})
  }

}