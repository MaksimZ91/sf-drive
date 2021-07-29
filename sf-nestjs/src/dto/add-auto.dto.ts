import { ApiProperty } from '@nestjs/swagger';
export class AddAutoDto {
  @ApiProperty()
  readonly userId: string;
  @ApiProperty()
  readonly mark: string;
  @ApiProperty()
  readonly model: string;
  @ApiProperty()
  readonly year: string;
  @ApiProperty()
  readonly number: string;
  @ApiProperty()
  readonly type: string;
  @ApiProperty()
  readonly vin: string;
  @ApiProperty()
  readonly collor: string;
  @ApiProperty()
  readonly volume: string;
  @ApiProperty()
  readonly power: string;
  @ApiProperty()
  readonly transmission: string;
  @ApiProperty()
  readonly mileage: string;
  @ApiProperty()
  readonly pts: string;
  @ApiProperty()
  readonly price: string;
  @ApiProperty()
  readonly priceThreeDays: string;
  @ApiProperty()
  readonly priceFiveDays: string;
  @ApiProperty()
  readonly osago: string;
  @ApiProperty()
  readonly kasko: string;
  @ApiProperty()
  readonly privod: string;
  @ApiProperty()
  readonly motor: string;
  @ApiProperty()
  readonly body: string;
  @ApiProperty()
  readonly sts: string;
}
