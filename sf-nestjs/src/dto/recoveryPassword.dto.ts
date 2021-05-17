import { IsEmail, Length } from 'class-validator';
export class RecoveryPasswordDto {
  @IsEmail()
  readonly email: string;

  @Length(1)
  readonly password: string;

  @Length(1)
  readonly newPassword: string;
}
