import { Module } from '@nestjs/common';
import { AutrozationAuthenController } from '../controller/authorization_authentication.controller';
import { AuthorizationAuthenService } from '../service/authorization_authentication.service';
import { UserRepository } from '../repo/user.repository';
import { TestGuardSevice } from '../service/testGuard.service';
import { JwtStrategy } from '../guard/jwt-strategy';
import { JwtAuthGuard } from '../guard/autn.guard';
import { AuthService } from 'src/service/auth.service';
import { UserSevice } from 'src/service/user.service';
import { ChatRepository } from 'src/repo/chat.repositoy';



@Module({
  imports: [],
  controllers: [AutrozationAuthenController],
  providers: [
    AuthorizationAuthenService,
    TestGuardSevice,
    JwtStrategy,
    JwtAuthGuard,
    UserRepository,
    AuthService,
    UserSevice,
    ChatRepository
  ],
})
export class AuthorizationModul {}
