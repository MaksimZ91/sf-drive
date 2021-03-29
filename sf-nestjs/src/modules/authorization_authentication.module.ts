import { Module } from '@nestjs/common';
import { AutrozationAuthenController } from '../controller/authorization_authentication.controller'
import { AuthorizationAuthenService } from '../service/authorization_authentication.service'
import { TestGuardSevice } from '../service/testGuard.service'
import { JwtStrategy} from '../guard/jwt-strategy'
import {JwtAuthGuard } from '../guard/autn.guard'


@Module({
  imports: [],
  controllers: [AutrozationAuthenController],
  providers: [AuthorizationAuthenService, TestGuardSevice, JwtStrategy, JwtAuthGuard] 
})
export class AuthorizationModul {}
