import { Injectable } from '@nestjs/common';
import { getMongoRepository, getRepository } from 'typeorm';
import { Users } from '../entites/users.entity';
import { ObjectID } from 'mongodb';

@Injectable()
export class UserRepository {
  async SaveUser(user: Users) {
    const repository = getRepository(Users);
    return await repository.save(user);
  }

  async FindOneByEmail(param: string) {
    const repository = getRepository(Users);
    return await repository.findOne({ email: param });
  }

  async FindAllByUserID(userId: string) {
    const repository = getRepository(Users);
    return await repository.find({ 
      relations:['autos'],
       where: { ['id']: userId }  
    });
  }

  async FindOneByRefToken(param: string) {
    const repository = getRepository(Users);
    return await repository.findOne({ refToken: param });
  }

  async FindOneByID(param: string) {
    const repository = getRepository(Users);
    return await repository.findOne({
      where: { ['id']: param },
    });
  }
}
