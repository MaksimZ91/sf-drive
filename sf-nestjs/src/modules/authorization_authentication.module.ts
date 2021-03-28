import { Module } from '@nestjs/common';
import { AutrozationAuthenController } from '../controller/authorization_authentication.controller'
import { AuthorizationAuthenService } from '../service/authorization_authentication.service'
import { TestGuardSevice } from '../service/testGuard.service'
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../Shemas/UserShema';
import { JwtStrategy} from '../guard/jwt-strategy'
import {JwtAuthGuard } from '../guard/autn.guard'


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AutrozationAuthenController],
  providers: [AuthorizationAuthenService, TestGuardSevice, JwtStrategy, JwtAuthGuard] 
})
export class AuthorizationModul {}
