import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ArendaService } from 'src/service/arenda.service';
import { FindeArendaInput, UserArendaInput } from '../graphql';

@Resolver()
export class ArendaResolver {
    constructor(private arendaService:ArendaService) {}
    
    @Query()
    async userArendaHistory(@Args('userArendaInput') userArendaInput: UserArendaInput) {     
      const { userId } = userArendaInput;    
      return await this.arendaService.userArendaHistory(userId)
    }

    @Query()
   async findeArendaByID(@Args('findeArendaInput') findeArendaInput:FindeArendaInput){
      const { id } = findeArendaInput;
      return await this.arendaService.findeArendaByID(id)
    }

    @Mutation()
   async deleteArenda(@Args('findeArendaInput') findeArendaInput:FindeArendaInput){
    const { id } = findeArendaInput;   
    return await this.arendaService.deleteArenda(id)
  }
}
