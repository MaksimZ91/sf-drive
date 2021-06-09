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

@Controller('auto')
export class AutoController {
  constructor(private autoService: AutoService) {}

  @Post('add')
  CreateAuto(@Body() addAuto: AddAutoDto) {
    return this.autoService.createAuto(addAuto);
  }

  @Post('options')
  AddAutoOptions(@Body() AddAutoOptions: AddAutoOptionsDto) {
    console.log(AddAutoOptions);
    return this.autoService.AddAutoOptions(AddAutoOptions);
  }

  @Post('photoname')
  AddAutoPhotoName(@Body() addAutoPhotoName: AddAutoPhotoNameDto) {
    return this.autoService.AddAutoPhotoName(addAutoPhotoName);
  }

  @Post('photoname/document')
  AddAutoDocumentPhotoName(
    @Body() addAutoDocumentPhotoName: AddAutoDocumentPhotoNameDto,
  ) {
    return this.autoService.AddAutoDocumentPhotoName(addAutoDocumentPhotoName);
  }

  @UseGuards(JwtAuthGuard)
  @Post('onuser')
  getAll(@Body() addAuto: AddAutoDto) {
    return this.autoService.getAll(addAuto);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.autoService.getOne(id);
  }

  @Get('all/autos')
  getAllAutos() {
    return this.autoService.getAllAutos();
  }

  @Get('photo/:id')
  getPhotoAuto(@Param('id') id: string) {
    return this.autoService.getPhotoAuto(id);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', configAutoPhoto))
  uploadFile(@UploadedFile() file) {
    return this.autoService.uploadFile(file);
  }

  @Post('upload/document')
  @UseInterceptors(FileInterceptor('file', configDocumentAutoPhoto))
  uploadFileDocument(@UploadedFile() file) {
    return this.autoService.uploadFile(file);
  }

  @Get('auto-image/:imganame')
  FindeFileImage(@Param('imganame') imagename, @Res() res): Observable<Object> {
    return res.sendFile(join(process.cwd(), '/files/AutoPhoto/' + imagename));
  }

  @Delete('delete-image/:imganame')
  deleteFile(@Param('imganame') imagename) {
    return this.autoService.deleteFile(imagename);
  }

  @Delete('delete-image/document/:imganame')
  deleteDocumentFile(@Param('imganame') imagename) {
    return this.autoService.deleteDocumentFile(imagename);
  }

  @Post('arenda')
  createArenda(@Body() addArenda: ArendaDtO) {
    return this.autoService.createArenda(addArenda);
  }

  /*@Post('filter/aa')
  filterAuto(@Body() AutoData: AutoDataDto) {
    return this.autoService.filterAuto(AutoData);
  }*/
}
