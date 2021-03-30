import { Injectable } from "@nestjs/common";
import { getMongoRepository } from "typeorm";
import { Users } from '../entites/user.entity'

@Injectable()
export class UserRepository {

    async SaveUser(user:Users){
        const repository = getMongoRepository(Users)
        return await repository.save(user)
    }

    async FindeOneByEmail(param:string){
        const repository = getMongoRepository(Users)
        return await repository.findOne({email:param})
    }

    async FindeOneByRefToken(param:string){
        const repository = getMongoRepository(Users)
        return await repository.findOne({refToken:param})
    }

    

}