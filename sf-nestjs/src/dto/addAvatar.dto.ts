import { ApiProperty } from "@nestjs/swagger";

export class addAvatarDto{
  @ApiProperty()
  readonly userAvatar: string; 
  readonly userID: string;
}
