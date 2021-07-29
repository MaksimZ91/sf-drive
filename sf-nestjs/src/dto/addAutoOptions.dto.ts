import { ApiProperty } from "@nestjs/swagger";

export class AddAutoOptionsDto {
  @ApiProperty()
  readonly newAuto: string;
  @ApiProperty()
  readonly isofix: boolean;
  @ApiProperty()
  readonly srs: boolean;
  @ApiProperty()
  readonly heater: boolean;
  @ApiProperty()
  readonly aux: boolean;
  @ApiProperty()
  readonly bluetooth: boolean;
  @ApiProperty()
  readonly cruizControl: boolean;
  @ApiProperty()
  readonly conditioning: boolean;
  @ApiProperty()
  readonly multimedia: boolean;
  @ApiProperty()
  readonly navigation: boolean;
  @ApiProperty()
  readonly seatCondi: boolean;
  @ApiProperty()
  readonly seatHeater: boolean;
  @ApiProperty()
  readonly trunk: boolean;
  @ApiProperty()
  readonly park: boolean;
  @ApiProperty()
  readonly camera: boolean;
  @ApiProperty()
  readonly babyChair: boolean;
  @ApiProperty()
  readonly deliveryAuto: boolean;
  @ApiProperty()
  readonly close: boolean;
  @ApiProperty()
  readonly fullTank: boolean;
}
