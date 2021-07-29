import { ApiProperty } from "@nestjs/swagger";

export class RefreshTokenUserDto {

  @ApiProperty()
  readonly refToken: string;
}
