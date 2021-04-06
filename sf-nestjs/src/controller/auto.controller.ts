import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/guard/autn.guard";
import { AutoService } from "src/service/auto.service";
import { AddAutoDto } from '../dto/add-auto.dto'

@Controller('auto')

export class AutoController {
    constructor (private autoService:AutoService){}

    @Post('add')
    CreateAuto(@Body() addAuto:AddAutoDto){
      return this.autoService.createAuto(addAuto)
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


    



    }