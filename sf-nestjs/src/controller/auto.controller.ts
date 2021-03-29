import { Controller, Get, Param } from "@nestjs/common";
import { AutoService } from "src/service/auto.service";

@Controller('auto')
export class AutoController {
    constructor (private autoService:AutoService){}

    @Get()
    getAll(){
        return this.autoService.getAll()
    }
     
    @Get(':id')
    getOne(@Param('id') id: string){
      return this.autoService.getOne(id)
    }


    



    }