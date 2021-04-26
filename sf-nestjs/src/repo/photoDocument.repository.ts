import { Injectable } from "@nestjs/common";
import { AutoPhotoDocumentName } from "../entites/autoPhotoDocument.entity";
import { getMongoRepository } from "typeorm";
import { ObjectID } from 'mongodb'


@Injectable()
export class PhotoDocumentRepository {
    async SavePhoto(documentPhotos:AutoPhotoDocumentName){
        const repository = getMongoRepository(AutoPhotoDocumentName)
        return await repository.save(documentPhotos)

    }

    async FindePhotoByID(id:string){
        const repository = getMongoRepository(AutoPhotoDocumentName)
        return await repository.findOne({where:{['auto._id']:new ObjectID(id)}})
    }

}