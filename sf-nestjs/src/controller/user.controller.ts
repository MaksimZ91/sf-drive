import { Controller, Get, Query } from '@nestjs/common';
import { UserSevice } from 'src/service/user.service';

@Controller('user')
export class UserController {
  constructor (private readonly userService:UserSevice){}

  
  @Get('getuser')
  public async findeAllMessges(  
    @Query('id') id:string ){
        const user =  await this.userService.findByPayload({userId:id})
        const name = user.fio.substr(0,6) + '.'     
    return {...user, name}
  }

}
