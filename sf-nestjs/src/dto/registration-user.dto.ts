import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';
export class RegistrUserDto {
  @ApiProperty()
  readonly fio: string;
  @ApiProperty()
  @IsEmail()
  readonly email: string;
  @ApiProperty()
  @Length(6)
  readonly password: string;
  @ApiProperty()
  readonly phone: string;
  @ApiProperty()
  readonly date: string;
  @ApiProperty()
  readonly number: string;
  @ApiProperty()
  readonly passDate: string;
  @ApiProperty()
  readonly about: string;
  @ApiProperty()
  readonly cod: string;
  @ApiProperty()
  readonly numberLicense: string;
  @ApiProperty()
  readonly dateLicense: string;
}
