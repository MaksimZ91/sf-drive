import { Injectable } from '@nestjs/common';
import { AutoPhotoDocumentName } from '../entites/autoPhotoDocument.entity';
import { getRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

@Injectable()
export class PhotoDocumentRepository {
  async SavePhoto(documentPhotos: AutoPhotoDocumentName) {
    const repository = getRepository(AutoPhotoDocumentName);
    return await repository.save(documentPhotos);
  }

  async FindePhotoByID(id: string) {
    const repository = getRepository(AutoPhotoDocumentName);
    return await repository.findOne({
      where: { ['auto.id']: id },
    });
  }
}
