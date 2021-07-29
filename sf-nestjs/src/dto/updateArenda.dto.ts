import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';
export class UpdateArendaDto {
  @ApiProperty()
 readonly arendaID:string
 @ApiProperty()
 readonly status: string
 @ApiProperty()
 readonly user: string
 @ApiProperty()
 readonly toUser: string
}
