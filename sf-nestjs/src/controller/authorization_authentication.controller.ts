import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthorizationAuthenService } from '../service/authorization_authentication.service';
import { TestGuardSevice } from '../service/testGuard.service';
import { AuthorizationUserDto } from '../dto/authorization-user.dto';
import { RecoveryPasswordDto } from '../dto/recoveryPassword.dto';
import { RefreshTokenUserDto } from '../dto/refreshTokenUser.dto';
import { JwtAuthGuard } from '../guard/autn.guard';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Authorization')
@Controller('author')
export class AutrozationAuthenController {
  constructor(
    private authorizationAuthenService: AuthorizationAuthenService,
    private testGuardService: TestGuardSevice,
  ) {}

  @ApiOkResponse({
    description:'Returns on successful authorization accessToken, refreshToken, userId: person.id '})
  @ApiNotFoundResponse({
    description:'The user was not found in the database'})  
  @ApiBadRequestResponse({
    description:'Token is not valid'})
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Post('login')
  Authorization(@Body() authorizationUser: AuthorizationUserDto) {
    return this.authorizationAuthenService.Authorization(authorizationUser);
  }

  @ApiOkResponse({
    description:'Returns on successful recovery password '})
  @ApiNotFoundResponse({
    description:'The user was not found in the database'})  
  @ApiBadRequestResponse({
    description:'Token is not valid or Password mismatch'})
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Post('recov')
  Recovery(@Body() recoverPassUser: RecoveryPasswordDto) {
    return this.authorizationAuthenService.Recovery(recoverPassUser);
  }
  @ApiOkResponse({
    description:'Returns on successful refresh tokin'})
  @ApiBadRequestResponse({
    description:'Token is not valid or Password mismatch'})
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @Post('refresh')
  Refresh(@Body() refreshTokenUser: RefreshTokenUserDto) {
    return this.authorizationAuthenService.Refresh(refreshTokenUser);
  }
  @ApiOkResponse({
    description:'Returns on successful test'})
  @ApiInternalServerErrorResponse({
    description:'Internal server Error'})
  @UseGuards(JwtAuthGuard)
  @Get('test')
  Test() {
    return this.testGuardService.Test();
  }
}
