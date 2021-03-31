import { Injectable } from "@nestjs/common";
import { getMongoRepository } from "typeorm";
import { Users } from '../entites/user.entity'
import { ObjectID } from 'mongodb'

@Injectable()
export class UserRepository {

    async SaveUser(user:Users){
        const repository = getMongoRepository(Users)
        return await repository.save(user)
    }

    async FindOneByEmail(param:string){
        const repository = getMongoRepository(Users)
        return await repository.findOne({email:param})
    }

    async FindOneByRefToken(param:string){
        const repository = getMongoRepository(Users)
        return await repository.findOne({refToken:param})
    }

    async FindOneByID(param:string){
        const repository = getMongoRepository(Users)
        return await repository.findOne({where:{['_id']:new ObjectID(param)}})
       
    }

    

}