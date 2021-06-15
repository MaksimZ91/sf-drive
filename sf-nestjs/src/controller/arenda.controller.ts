import { Body, Controller, Post } from "@nestjs/common";
import { BookingDto } from "src/dto/booking.dto";
import { ArendaService } from "src/service/arenda.service";

@Controller('arenda')
export class ArendaController {
  constructor (private arendaService:ArendaService){}

  @Post('booking')
  filterAuto(@Body() bookingDto: BookingDto) {
    return this.arendaService.findeArendaByiD(bookingDto);
  }

}