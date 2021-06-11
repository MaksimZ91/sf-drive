import { Module } from '@nestjs/common';
import { AutrozationAuthenController } from '../controller/authorization_authentication.controller';
import { AuthorizationAuthenService } from '../service/authorization_authentication.service';
import { UserRepository } from '../repo/user.repository';
import { TestGuardSevice } from '../service/testGuard.service';
import { JwtStrategy } from '../guard/jwt-strategy';
import { JwtAuthGuard } from '../guard/autn.guard';
import { UserResolver } from 'src/user/user.resolver';
import { UserService } from 'src/service/user.service';

@Module({
  imports: [],
  controllers: [AutrozationAuthenController],
  providers: [
    AuthorizationAuthenService,
    TestGuardSevice,
    JwtStrategy,
    JwtAuthGuard,
    UserRepository,
    UserService,
    UserResolver
  ],
})
export class AuthorizationModul {}
