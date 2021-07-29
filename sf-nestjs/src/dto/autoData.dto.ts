import { ApiProperty } from "@nestjs/swagger";

export class AutoDataDto {
  @ApiProperty()
  readonly startDate: Date;
  @ApiProperty()
  readonly endDate: Date;
  @ApiProperty()  
  readonly type: string;
}
