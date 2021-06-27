import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty() 
  readonly toUserId: string;

  @IsNotEmpty()
  @IsString()
  readonly body: string;
}
