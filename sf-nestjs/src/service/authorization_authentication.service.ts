import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthorizationUserDto } from '../dto/authorization-user.dto';
import { RecoveryPasswordDto } from '../dto/recoveryPassword.dto';
import { RefreshTokenUserDto } from '../dto/refreshTokenUser.dto';
import { UserRepository } from '../repo/user.repository';
import { ConfigService } from '@nestjs/config';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

@Injectable()
export class AuthorizationAuthenService {
  constructor(
    private configService: ConfigService,
    private userRepository: UserRepository,
  ) {}

  async Authorization(authorizationUser: AuthorizationUserDto) {    
    const { email, password } = authorizationUser;
    const person = await this.userRepository.FindOneByEmail(email);

    if (!person) {
      throw new HttpException(
        'Пользователь c таким email не найден!',
        HttpStatus.NOT_FOUND,
      );
    }    

    const isMatch = await bcrypt.compare(password, person.password);

    if (!isMatch) {
      throw new HttpException(
        'Не верная почта или пароль!',
        HttpStatus.FORBIDDEN,
      );
    }
    

    const accessToken = await jwt.sign(
      { name: person.fio, userId: person.id },
      this.configService.get('JWT_ACCESS_SECRET'),
      { expiresIn: this.configService.get('ACCESS_TOKEN_LIFE') },
    );

    const refreshToken = await jwt.sign(
      {},
      this.configService.get('JWT_REFRESH_SECRET'),
      { expiresIn: this.configService.get('REFRESH_TOKEN_LIFE') },
    );

    
    person.refToken = refreshToken;
    await this.userRepository.SaveUser(person);

    return { accessToken, refreshToken, userId: person.id, message: 'Ok' };
  }

  async Recovery(recoveryPasswordUser: RecoveryPasswordDto) {
    const { email, password, newPassword } = recoveryPasswordUser;

    const person = await this.userRepository.FindOneByEmail(email);

    if (!person) {
      throw new HttpException(
        'Пользователь c таким email не найден!',
        HttpStatus.NOT_FOUND,
      );
    }

    if (password == newPassword) {
      person.password = await bcrypt.hash(password, 10);
      await this.userRepository.SaveUser(person);
      return { message: 'Ok' };
    } else {
      throw new HttpException(
        'Введенные пароли не совпадают!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async Refresh(refreshTokenUser: RefreshTokenUserDto) {
    const { refToken } = refreshTokenUser;
    const data = await jwt.verify(refToken, 'RefreshSecret');

    if (!data) {
      throw new HttpException('Токин не валиден!', HttpStatus.BAD_REQUEST);
    }

    const person = await this.userRepository.FindOneByRefToken(refToken);

    const accessToken = await jwt.sign(
      { name: person.fio, userId: person.id },
      'AccessSecret',
      { expiresIn: 1200 },
    );

    const refreshToken = await jwt.sign({}, 'RefreshSecret', { expiresIn: 86400 });

    person.refToken = refreshToken;
    await this.userRepository.SaveUser(person);

    return { accessToken, refreshToken, userId: person.id };
  }
}
