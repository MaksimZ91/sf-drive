import { ApiProperty } from "@nestjs/swagger"

export class StatusDto {
  @ApiProperty()
  readonly autoID: string
  @ApiProperty()
  readonly arendaID:string
}
