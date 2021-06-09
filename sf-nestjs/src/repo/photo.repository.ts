import { Injectable } from '@nestjs/common';
import { AutoPhotoName } from 'src/entites/autoPhotoName.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class PhotoRepository {
  async SavePhoto(photos: AutoPhotoName) {
    const repository = getRepository(AutoPhotoName);
    return await repository.save(photos);
  }
}
