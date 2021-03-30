import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AutoService } from "src/service/auto.service";
import { AddAutoDto } from '../dto/add-auto.dto'

@Controller('auto')
export class AutoController {
    constructor (private autoService:AutoService){}

    @Post('add')
    CreateAuto(@Body() addAuto:AddAutoDto){
      return this.autoService.createAuto(addAuto)
    }

  

    @Get()
    getAll(){
        return this.autoService.getAll()
    }
     
    @Get(':id')
    getOne(@Param('id') id: string){
      return this.autoService.getOne(id)
    }


    



    }