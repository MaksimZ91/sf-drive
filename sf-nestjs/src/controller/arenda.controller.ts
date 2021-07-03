import { Body, Controller, Post, Req, Query, Get } from "@nestjs/common";
import { ArendaDtO } from "src/dto/arenda.dto";
import { UpdateArendaDto } from "src/dto/updateArenda.dto";
import { Arenda } from "src/entites/arenda.entity";
import { ArendaService } from "src/service/arenda.service";
import { ChatService } from "src/service/chat.service";

@Controller('arenda')
export class ArendaController {
  constructor (private arendaService:ArendaService,
    private readonly chatService:ChatService){}
  
  @Post('created')
  createArenda(@Body() addArenda: ArendaDtO) {
    return this.arendaService.createArenda(addArenda);
  }

  @Get('findearenda')
  findeArenda(@Req() req:any,
  @Query('arendaID') arendaID:string
  ){
    return this.arendaService.findeArendaByID(arendaID)
  }





}