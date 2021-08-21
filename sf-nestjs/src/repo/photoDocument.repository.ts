import { Injectable } from '@nestjs/common';
import { AutoPhotoDocumentName } from '../entites/autoPhotoDocument.entity';
import { UserPhotoDocumentName } from '../entites/userPhotoDocument.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class PhotoDocumentRepository {
  async SavePhoto(documentPhotos: AutoPhotoDocumentName) {
    const repository = getRepository(AutoPhotoDocumentName);
    return await repository.save(documentPhotos);
  }

  async SaveUserPhoto(documentPhotos: UserPhotoDocumentName) {
    const repository = getRepository(UserPhotoDocumentName);
    return await repository.save(documentPhotos);
  }

  async FindeUserPhotoByID(id: string) {
    const repository = getRepository(UserPhotoDocumentName);
    return await repository.findOne({
      where: { ['user.id']: id },
    });
  }

  async FindePhotoByID(id: string) {
    const repository = getRepository(AutoPhotoDocumentName);
    return await repository.findOne({
      where: { ['auto.id']: id },
    });
  }
}
