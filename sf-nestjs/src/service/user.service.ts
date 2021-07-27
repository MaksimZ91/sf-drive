import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repo/user.repository';

@Injectable()
export class UserSevice {
  constructor (private readonly userRepositiry: UserRepository){}

  async findByPayload({ userId }: any) {
  return await this.userRepositiry.FindOneByID(userId)
  }
}
