import { Body, Controller, Post } from "@nestjs/common";
import { ArendaService } from "src/service/arenda.service";

@Controller('arenda')
export class ArendaController {
  constructor (private arendaService:ArendaService){}


}