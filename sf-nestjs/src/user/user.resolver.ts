import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from 'src/service/user.service';
import { UserArendaInput } from '../graphql';

@Resolver()
export class UserResolver {
    constructor(private userService:UserService) {}
    
    @Query()
    userArendaHistory(@Args('userArendaInput') userArendaInput: UserArendaInput) {
      console.log(userArendaInput)
      const { id } = userArendaInput;    
      return this.userService.userArendaHistory(id)
    }
}
