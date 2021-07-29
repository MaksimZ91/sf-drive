import { ApiProperty } from "@nestjs/swagger";

export class ArendaDtO {
  @ApiProperty()
  readonly newAuto: string;
  @ApiProperty()
  readonly startDay: Date;
  @ApiProperty()
  readonly endDay: Date;
  @ApiProperty()
  readonly cost: number;
  @ApiProperty()
  readonly coment:string;
  @ApiProperty()
  readonly user:string;
  @ApiProperty()
  readonly babyChair: boolean;
  @ApiProperty()
  readonly deliveryAuto: boolean;
  @ApiProperty()
  readonly close: boolean;
  @ApiProperty()
  readonly fullTank: boolean;
}
