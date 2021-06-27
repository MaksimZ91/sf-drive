import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserSevice } from './user.service';



@Injectable()
export class AuthService {
  constructor(
    private readonly usersService:UserSevice,   
  ) {}

  async validateUser(payload: any){
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }


}
