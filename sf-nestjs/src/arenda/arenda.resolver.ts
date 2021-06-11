import { Resolver, Query, Args } from '@nestjs/graphql';
import { ArendaService } from 'src/service/arenda.service';
import { UserArendaInput } from '../graphql';

@Resolver()
export class ArendaResolver {
    constructor(private arendaService:ArendaService) {}
    
    @Query()
    userArendaHistory(@Args('userArendaInput') userArendaInput: UserArendaInput) {
      console.log(userArendaInput)
      const { id } = userArendaInput;    
      return this.arendaService.userArendaHistory(id)
    }
}
