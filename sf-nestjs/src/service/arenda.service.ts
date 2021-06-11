import { Injectable } from "@nestjs/common";
import { ArendaRepository } from "src/repo/arenda.repository";




@Injectable()
export class ArendaService {
    constructor ( private arendaRepository:ArendaRepository){}
            
    async userArendaHistory (id:string){  
        return await this.arendaRepository.findeHistoryArenda(id)
    }

}