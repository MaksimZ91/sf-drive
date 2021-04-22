import { Body, Controller, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors, Res, Delete } from "@nestjs/common";
import { diskStorage } from 'multer'
import { Observable, of } from 'rxjs'
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "src/guard/autn.guard";
import { AutoService } from "src/service/auto.service";
import { AddAutoDto } from '../dto/add-auto.dto'
import { AddAutoOptionsDto } from "src/dto/addAutoOptions.dto";
import { unlink } from 'fs/promises';
import path = require('path');
import { join } from 'path';

@Controller('auto')

export class AutoController {
    constructor (private autoService:AutoService){}

    @Post('add')
    CreateAuto(@Body() addAuto:AddAutoDto){
      return this.autoService.createAuto(addAuto)
    }

    @Post('add/options')
    AddAutoOptions(@Body() AddAutoOptions:AddAutoOptionsDto){
      return this.autoService.AddAutoOptions(AddAutoOptions)
    }
  
    @UseGuards(JwtAuthGuard)
    @Post('onuser')
    getAll(@Body() addAuto:AddAutoDto){
        return this.autoService.getAll(addAuto)
    }
         
    @Get(':id')
    getOne(@Param('id') id: string){
      return this.autoService.getOne(id)
    }

  
    @Get('all/autos')
    getAllAutos(){
        return this.autoService.getAllAutos()
    }
    
    @Post('upload')
    @UseInterceptors(
      FileInterceptor('file', {
        storage:diskStorage({
          destination:'./files',
          filename:(req, file, callback)=>{
            file.originalname
            callback(null, file.originalname)
          }
        })
      })
    )
    uploadFile(@UploadedFile() file){
      console.log(file)
      return {message : file.path}

    }


    @Get('auto-image/:imganame')
    FindeFileImage(@Param('imganame') imagename, @Res() res):Observable<Object>{
      return (res.sendFile(join(process.cwd(), 'files/'+ imagename)))
    }



    @Delete('delete-image/:imganame')
    DeleteFile(@Param('imganame') imagename){
      unlink('files/'+ imagename)
      return {message: 'delete-ok'}
    }


    



    }