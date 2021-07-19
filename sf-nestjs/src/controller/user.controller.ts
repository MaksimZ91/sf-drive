import { Controller, Get, Query } from '@nestjs/common';
import { UserSevice } from 'src/service/user.service';

@Controller('user')
export class UserController {
  constructor (private readonly userService:UserSevice){}

  
  @Get('getuser')
  public async findeAllMessges(  
    @Query('id') id:string ){
        const user =  await this.userService.findByPayload({userId:id})
        const newName = user.fio.split(' ')  
        const name = newName[0] + ' ' + newName[1][0].toUpperCase() + '.'
    return {...user, name}
  }

}
