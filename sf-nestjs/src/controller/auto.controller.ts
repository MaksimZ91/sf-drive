import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Res,
  Delete,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/guard/autn.guard';
import { AutoService } from 'src/service/auto.service';
import { AddAutoDto } from '../dto/add-auto.dto';
import { AddAutoOptionsDto } from 'src/dto/addAutoOptions.dto';
import path = require('path');
import { join } from 'path';
import { AddAutoPhotoNameDto } from 'src/dto/addAutoPhotoName';
import { AddAutoDocumentPhotoNameDto } from 'src/dto/addAutoPhotoDocumentName.dto';
import { ArendaDtO } from 'src/dto/arenda.dto';
import { AutoDataDto } from 'src/dto/autoData.dto';
import { ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Autos } from 'src/entites/auto.entity';
import { AutoPhotoName } from 'src/entites/autoPhotoName.entity';


const configAutoPhoto = {
  storage: diskStorage({
    destination: `./files/AutoPhoto/`,
    filename: (req, file, callback) => {
      file.originalname;
      callback(null, file.originalname);
    },
  }),
};

const configDocumentAutoPhoto = {
  storage: diskStorage({
    destination: `./files/documentAuto/`,
    filename: (req, file, callback) => {
      file.originalname;
      callback(null, file.originalname);
    },
  }),
};
@ApiTags('Auto')
@Controller('auto')
export class AutoController {
  constructor(private autoService: AutoService) {}

  @ApiOkResponse({
    description:'Return new auto id on success' })
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Post('add')
  CreateAuto(@Body() addAuto: AddAutoDto) {
    return this.autoService.createAuto(addAuto);
  }
  @ApiOkResponse({
    description:'Return message ok on success' })
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Post('options')
  AddAutoOptions(@Body() AddAutoOptions: AddAutoOptionsDto) {   
    return this.autoService.AddAutoOptions(AddAutoOptions);
  }
  @ApiOkResponse({
    description:'Return message ok on success' })
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Post('photoname')
  AddAutoPhotoName(@Body() addAutoPhotoName: AddAutoPhotoNameDto) {
    return this.autoService.AddAutoPhotoName(addAutoPhotoName);
  }
  @ApiOkResponse({
    description:'Return message ok on success' })
  @ApiInternalServerErrorResponse({
     description:'Internal server Error'})
  @Post('photoname/document')
  AddAutoDocumentPhotoName(
    @Body() addAutoDocumentPhotoName: AddAutoDocumentPhotoNameDto,
  ) {
    return this.autoService.AddAutoDocumentPhotoName(addAutoDocumentPhotoName);
  }
  @ApiOkResponse({
    description:'Return autos ok on success', type:Autos })
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @UseGuards(JwtAuthGuard)
  @Post('onuser')
  getAll(@Body() addAuto: AddAutoDto) {
    return this.autoService.getAll(addAuto);
  }

  @ApiOkResponse({
    description:'Return autos on success', type:Autos })
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.autoService.getOne(id);
  }

  @ApiOkResponse({
    description:'Return all autos ok on success', type:Autos })
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Get('all/autos')
  getAllAutos() {
    return this.autoService.getAllAutos();
  }
  @ApiOkResponse({
    description:'Return photo name', type:AutoPhotoName})
  @ApiInternalServerErrorResponse({
      description:'Internal server Error'})
  @Get('photo/:id')
  getPhotoAuto(@Param('id') id: string) {
    return this.autoService.getPhotoAuto(id);
  }
  @ApiOkResponse({
    description:'Return file name'})
  @ApiInternalServerErrorResponse({
     description:'Internal server Error'})
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', configAutoPhoto))
  uploadFile(@UploadedFile() file) {
    return this.autoService.uploadFile(file);
  }

  @ApiOkResponse({
    description:'Return file name' })
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Post('upload/document')
  @UseInterceptors(FileInterceptor('file', configDocumentAutoPhoto))
  uploadFileDocument(@UploadedFile() file) {
    return this.autoService.uploadFile(file);
  }
  @ApiOkResponse({
    description:'Return file name' })
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Get('auto-image/:imganame')
  FindeFileImage(@Param('imganame') imagename, @Res() res): Observable<Object> {
    return res.sendFile(join(process.cwd(), '/files/AutoPhoto/' + imagename));
  }

  @ApiOkResponse({
    description:'Return delete file name' })
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Delete('delete-image/:imganame')
  deleteFile(@Param('imganame') imagename) {
    return this.autoService.deleteFile(imagename);
  }
  @ApiOkResponse({
    description:'Return delete file name' })
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Delete('delete-image/document/:imganame')
  deleteDocumentFile(@Param('imganame') imagename) {
    return this.autoService.deleteDocumentFile(imagename);
  }



  
}
