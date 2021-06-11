import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/repo/user.repository";




@Injectable()
export class UserService {
    constructor ( private userRepository:UserRepository){}
            
    async userArendaHistory (id:string){  
        return await this.userRepository.findeHistoryArendaByID(id)
    }

}