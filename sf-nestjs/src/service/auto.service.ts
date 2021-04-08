import { Injectable } from "@nestjs/common";
import { getMongoManager} from "typeorm";
import { AddAutoDto } from '../dto/add-auto.dto'
import { AutoRepository } from "src/repo/auto.repository";
import { UserRepository } from "src/repo/user.repository";
import { Autos } from '../entites/auto.entity'





@Injectable()
export class AutoService{
  constructor(private autoRepository:AutoRepository,
              private userRepository:UserRepository){}
  
  async createAuto(addAuto:AddAutoDto){
    const newAuto = new Autos
    const currentUser = await this.userRepository.FindOneByID(addAuto.userId)
    newAuto.mark=addAuto.mark
    newAuto.model=addAuto.model
    newAuto.number=addAuto.number
    newAuto.year=addAuto.year
    newAuto.vin=addAuto.vin
    newAuto.collor=addAuto.collor
    newAuto.volume=addAuto.volume
    newAuto.power=addAuto.power
    newAuto.transmission=addAuto.transmission
    newAuto.millege=addAuto.millege
    newAuto.numberPTS=addAuto.numberPTS
    newAuto.price=addAuto.price
    newAuto.priceThreeDays=addAuto.priceThreeDays
    newAuto.priceFiveDays=addAuto.priceFiveDays
    newAuto.osago=addAuto.osago
    newAuto.kasko=addAuto.kasko
    newAuto.privod=addAuto.privod
    newAuto.user=currentUser   
    await this.autoRepository.SaveAuto(newAuto)
    return { message:"Ok"} 

  }


  async getAll(addAuto:AddAutoDto){    
   return await this.autoRepository.FindAllByUserID(addAuto.userId)      
     
  }
  
  async getOne(id:string){
   return await  this.autoRepository.FindOneByID(id)
  }

  async getAllAutos(){
    return  await  this.autoRepository.FindAll()
    
  }

}