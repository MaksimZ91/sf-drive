import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransferDto {
  @IsNotEmpty()
  readonly userID: string;

  @IsNotEmpty()
  readonly toUserAuto: string;

  @IsNotEmpty()
  readonly amount: number;

  @IsNotEmpty()
  readonly cardNumber: string;

  @IsNotEmpty()
  readonly cardName: string;

  @IsNotEmpty()
  readonly cardExpiry: string;

  @IsNotEmpty()
  readonly cardCvc: string;
}
