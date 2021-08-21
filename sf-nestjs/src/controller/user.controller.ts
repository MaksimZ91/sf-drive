import { Controller, Get, Post, Delete, Query, UseInterceptors, UploadedFile, Param, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { addAvatarDto } from 'src/dto/addAvatar.dto';
import { AddUserDocumentPhotoNameDto } from 'src/dto/addUserDocumentPhotoName';
import { UserSevice } from 'src/service/user.service';

const configAvatar = {
  storage: diskStorage({
    destination: `./files/AvatarUser/`,
    filename: (req, file, callback) => {
      file.originalname;
      callback(null, file.originalname);
    },
  })
}

const configDocumentUserPhoto = {
  storage: diskStorage({
    destination: `./files/userDocument/`,
    filename: (req, file, callback) => {
      file.originalname;
      callback(null, file.originalname);
    },
  }),
};

@Controller('user')
export class UserController {
  constructor (private readonly userService:UserSevice){}

  
  @Get('getuser')
  public async findeAllMessges(  
    @Query('id') id:string ){
        const user =  await this.userService.findByPayload({userId:id})
        const newName = user.fio.split(' ')  
        const name = newName[0] + ' ' + newName[1][0].toUpperCase() + '.'
    return {...user, name}
  }

  @Post('avatar')
  addAvatar(@Body() addAvatar:addAvatarDto){
    return this.userService.updateUserAvatar(addAvatar)
  }

  @Post('photoname/document')
  AddAutoDocumentPhotoName( @Body() adUserDocumentPhotoName: AddUserDocumentPhotoNameDto) {
    return this.userService.addUserDocumentPhotoName(adUserDocumentPhotoName)
  }


  @Post('upload')
  @UseInterceptors(FileInterceptor('file', configAvatar))
  uploadFile(@UploadedFile() file) {
    return this.userService.uploadFile(file);
  }

  @Post('upload/document')
  @UseInterceptors(FileInterceptor('file', configDocumentUserPhoto))
  uploadFileDocument(@UploadedFile() file) {
    return this.userService.uploadFile(file);
  }

  @Delete('delete-image/:imagename')
  deleteFile(@Param('imagename') imagename) {
    return this.userService.deleteFile(imagename);
  }

  @Delete('delete-image/document/:imganame')
  deleteDocumentFile(@Param('imganame') imagename) {
    return this.userService.deleteDocumentFile(imagename);
  }

}
