import { Injectable } from "@nestjs/common";
import { Autos } from '../entites/auto.entity'
import { getMongoRepository } from "typeorm";
import { ObjectID } from 'mongodb'


Injectable()
export class AutoRepository {

    async SaveAuto(auto:Autos){
        const repository= getMongoRepository(Autos)
        return await repository.save(auto)
    }

    async FindAllByUserID (userId:string){
        const repository= getMongoRepository(Autos)
        return await repository.find({where:{['user._id']:new ObjectID(userId)}})
    }
    

    async FindOneByID (id:string){
        const repository=getMongoRepository(Autos)
        return await repository.findOne({where:{['_id']:new ObjectID(id)}})
    }

    async FindOneByNumber (number:string){
        const repository=getMongoRepository(Autos)
        return await repository.findOne({where:{['number']:number}})
    }

    async FindAll (){
        const repository=getMongoRepository(Autos)
        return await repository.find({ relations: ["user"] })
    }

}