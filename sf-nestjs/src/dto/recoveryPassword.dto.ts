import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';
export class RecoveryPasswordDto {
  @ApiProperty()
  @IsEmail()
  readonly email: string;
  @ApiProperty()
  @Length(1)
  readonly password: string;
  @ApiProperty()
  @Length(1)
  readonly newPassword: string;
}
