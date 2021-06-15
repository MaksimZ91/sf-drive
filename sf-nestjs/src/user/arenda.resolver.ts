import { Resolver, Query, Args } from '@nestjs/graphql';
import { ArendaService } from 'src/service/arenda.service';
import { FindeArendaInput, UserArendaInput } from '../graphql';

@Resolver()
export class ArendaResolver {
    constructor(private arendaService:ArendaService) {}
    
    @Query()
    userArendaHistory(@Args('userArendaInput') userArendaInput: UserArendaInput) {     
      const { userId } = userArendaInput;    
      return this.arendaService.userArendaHistory(userId)
    }

    /*@Query()
    findeArendaByID(@Args('findeArendaInput') findeArendaInput:FindeArendaInput){
      const { id } = findeArendaInput;
      return this.arendaService.findeArendaByiD(id)
    }*/
}
