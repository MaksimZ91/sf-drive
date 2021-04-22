import { Injectable } from "@nestjs/common";
import { AutoPhotoName } from "src/entites/autoPhotoName.entity";
import { getMongoRepository } from "typeorm";
import { ObjectID } from 'mongodb'


@Injectable()
export class PhotoRepository {
    async SavePhoto(photos:AutoPhotoName){
        const repository = getMongoRepository(AutoPhotoName)
        return await repository.save(photos)

    }

    async FindePhotoByID(id:string){
        const repository = getMongoRepository(AutoPhotoName)
        return await repository.findOne({where:{['auto._id']:new ObjectID(id)}})
    }

}