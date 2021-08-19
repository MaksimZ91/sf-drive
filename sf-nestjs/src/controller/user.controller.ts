import { Controller, Get, Post, Delete, Query, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
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

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', configAvatar))
  uploadFile(@UploadedFile() file) {
    return this.userService.uploadFile(file);
  }

  @Delete('delete-image/:imagename')
  deleteFile(@Param('imagename') imagename) {
    return this.userService.deleteFile(imagename);
  }

}
