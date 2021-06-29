import { Body, Controller, Post } from "@nestjs/common";
import { ArendaDtO } from "src/dto/arenda.dto";
import { ArendaService } from "src/service/arenda.service";

@Controller('arenda')
export class ArendaController {
  constructor (private arendaService:ArendaService){}
  
  @Post('created')
  createArenda(@Body() addArenda: ArendaDtO) {
    return this.arendaService.createArenda(addArenda);
  }


}