import { Injectable } from "@nestjs/common";
import { BookingDto } from "src/dto/booking.dto";
import { ArendaRepository } from "src/repo/arenda.repository";




@Injectable()
export class ArendaService {
    constructor ( private arendaRepository:ArendaRepository){}
                
    async userArendaHistory (id:string){  
        return await this.arendaRepository.findeHistoryArendaByID(id)
    }

    async findeArendaByiD(bookingDto:BookingDto){
        const { id } = bookingDto
        return await this.arendaRepository.findeArendaDyID(id)
    }    
}