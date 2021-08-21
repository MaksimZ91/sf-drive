import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repo/user.repository';
import { unlink } from 'fs/promises';
import { addAvatarDto } from 'src/dto/addAvatar.dto';
import { AddUserDocumentPhotoNameDto } from 'src/dto/addUserDocumentPhotoName';
import { UserPhotoDocumentName } from 'src/entites/userPhotoDocument.entity';
import { PhotoDocumentRepository } from 'src/repo/photoDocument.repository';


@Injectable()
export class UserSevice {  
  constructor (private readonly userRepositiry: UserRepository,
               private readonly photoDocumentRepository: PhotoDocumentRepository){}

  async findByPayload({ userId }: any) {
  return await this.userRepositiry.FindOneByID(userId)
  }

  async uploadFile(file) {
    return file.filename;
  }

  async updateUserAvatar (addAvatar:addAvatarDto){
    const user = await this.userRepositiry.FindOneByID(addAvatar.userID)
    if (!user){
      throw new NotFoundException (`User not found!`)
    }
    user.avatar = addAvatar.userAvatar
    await this.userRepositiry.SaveUser(user)
    return user  
    
  }

  async addUserDocumentPhotoName(addUserDocumentPhotoName: AddUserDocumentPhotoNameDto){
    const user = await this.userRepositiry.FindOneByID(addUserDocumentPhotoName.userID)
    if (!user){
      throw new NotFoundException (`User not found!`)
    }
    addUserDocumentPhotoName.photoName.forEach((photo) => {
      const newUserDocumentPhotoName = new UserPhotoDocumentName(photo);
      newUserDocumentPhotoName.user = user;
      this.photoDocumentRepository.SaveUserPhoto(newUserDocumentPhotoName)
    });
    return { message: 'ok' };
  }

  async deleteFile(imagename: string) {
    unlink('files/AvatarUser/' + imagename);
    return { message: 'Delete' };
  }

  async deleteDocumentFile(imagename: string) {
    unlink('files/userDocument/' + imagename);
    return { message: 'Delete' };
  }
}
