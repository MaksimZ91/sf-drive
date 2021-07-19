import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user.controller';
import { UserRepository } from 'src/repo/user.repository';
import { UserSevice } from 'src/service/user.service';



@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserSevice, UserRepository],
})
export class UserModul {}
