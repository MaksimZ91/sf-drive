import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty()
  @IsNotEmpty() 
  readonly toUserId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly body: string;
}
