import { ApiProperty } from "@nestjs/swagger";

export class AddAutoPhotoNameDto {
  @ApiProperty()
  readonly newAuto: string;
  @ApiProperty()
  readonly photoName: [];
}
