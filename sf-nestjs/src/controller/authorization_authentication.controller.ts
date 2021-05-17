import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthorizationAuthenService } from '../service/authorization_authentication.service';
import { TestGuardSevice } from '../service/testGuard.service';
import { AuthorizationUserDto } from '../dto/authorization-user.dto';
import { RecoveryPasswordDto } from '../dto/recoveryPassword.dto';
import { RefreshTokenUserDto } from '../dto/refreshTokenUser.dto';
import { JwtAuthGuard } from '../guard/autn.guard';

@Controller('author')
export class AutrozationAuthenController {
  constructor(
    private authorizationAuthenService: AuthorizationAuthenService,
    private testGuardService: TestGuardSevice,
  ) {}

  @Post('login')
  Authorization(@Body() authorizationUser: AuthorizationUserDto) {
    return this.authorizationAuthenService.Authorization(authorizationUser);
  }

  @Post('recov')
  Recovery(@Body() recoverPassUser: RecoveryPasswordDto) {
    return this.authorizationAuthenService.Recovery(recoverPassUser);
  }

  @Post('refresh')
  Refresh(@Body() refreshTokenUser: RefreshTokenUserDto) {
    return this.authorizationAuthenService.Refresh(refreshTokenUser);
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  Test() {
    return this.testGuardService.Test();
  }
}
