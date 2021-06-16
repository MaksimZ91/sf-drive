import { Injectable, NotFoundException } from "@nestjs/common";
import { ArendaRepository } from "src/repo/arenda.repository";




@Injectable()
export class ArendaService {
    constructor ( private arendaRepository:ArendaRepository){}
                
    async userArendaHistory (id:string){  
        const history = await this.arendaRepository.findeHistoryArendaByID(id)
        if(history){
            return history
        }
        throw new NotFoundException (`History by ${id} not found!`)
    }

    async findeArendaByID(id:string){        
        const arenda = await this.arendaRepository.findeArendaDyID(id)
        if (arenda){
            return arenda
        }
        throw new NotFoundException (`Arenda ${id} not found!`)
    }   
    
    async deleteArenda(id:string){
        const arenda = await this.arendaRepository.findeArendaDyID(id)
        if (!arenda){
            throw new NotFoundException (`Arenda ${id} not found!`) 
        }
        if (this.arendaRepository.findeAndDeleteArenda(id)){
            return arenda
        }
        throw new Error ('Can`t delete arenda!')     
        
    }
}