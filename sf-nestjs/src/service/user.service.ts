import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repo/user.repository';
import { unlink } from 'fs/promises';

@Injectable()
export class UserSevice {
  constructor (private readonly userRepositiry: UserRepository){}

  async findByPayload({ userId }: any) {
  return await this.userRepositiry.FindOneByID(userId)
  }

  async uploadFile(file) {
    return file.filename;
  }

  async deleteFile(imagename: string) {
    unlink('files/AvatarUser/' + imagename);
    return { message: 'Delete' };
  }
}
