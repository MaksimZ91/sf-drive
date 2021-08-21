import { ApiProperty } from "@nestjs/swagger";

export class AddUserDocumentPhotoNameDto {
  @ApiProperty()
  readonly userID: string;
  @ApiProperty()
  readonly photoName: [];
}
