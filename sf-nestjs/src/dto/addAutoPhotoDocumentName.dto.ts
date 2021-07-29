import { ApiProperty } from "@nestjs/swagger";

export class AddAutoDocumentPhotoNameDto {
  @ApiProperty()
  readonly newAuto: string;
  @ApiProperty()
  readonly photoName: [];
}
