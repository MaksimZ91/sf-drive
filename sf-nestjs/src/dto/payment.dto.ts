import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransferDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly userID: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly toUserAuto: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly amount: number;
  @ApiProperty()
  @IsNotEmpty()
  readonly cardNumber: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly cardName: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly cardExpiry: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly cardCvc: string;
}
