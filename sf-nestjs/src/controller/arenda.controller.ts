import { Body, Controller, Post, Req, Query, Get } from "@nestjs/common";
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ArendaDtO } from "src/dto/arenda.dto";
import { UpdateArendaDto } from "src/dto/updateArenda.dto";
import { Arenda } from "src/entites/arenda.entity";
import { ArendaService } from "src/service/arenda.service";
import { ChatService } from "src/service/chat.service";


@ApiTags('Arenda')
@Controller('arenda')
export class ArendaController {
  constructor (private arendaService:ArendaService,
    private readonly chatService:ChatService){}
  
  @ApiOkResponse({
      description:'Returns on successful cretead arenda ',
      type:Arenda,
    })
  @ApiNotFoundResponse({
      description:'The arenda was not found in the database'})  
  @ApiBadRequestResponse({
      description:'The car was already booked at that time!'})
  @ApiInternalServerErrorResponse({
      description:'Internal server Error'})  
  @Post('created')
  createArenda(@Body() addArenda: ArendaDtO) {
    return this.arendaService.createArenda(addArenda);
  }

  @ApiOkResponse({
    description:'Returns on successful find arenda ',
    type:Arenda,
  })
@ApiNotFoundResponse({
    description:'The arenda was not found in the database'})  
@ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Get('findearenda')
  findeArenda(@Req() req:any,
  @Query('arendaID') arendaID:string
  ){
    return this.arendaService.findeArendaByID(arendaID)
  }





}