import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Autos } from './auto.entity';

@Entity()
export class OptionsAuto {
  constructor(
    isofix: boolean,
    srs: boolean,
    heater: boolean,
    aux: boolean,
    bluetooth: boolean,
    cruizControl: boolean,
    conditioning: boolean,
    multimedia: boolean,
    navigation: boolean,
    seatCondi: boolean,
    seatHeater: boolean,
    trunk: boolean,
    park: boolean,
    camera: boolean,
    babyChair: boolean,
    deliveryAuto: boolean,
    close: boolean,
    fullTank: boolean,
  ) {
    this.isofix = isofix;
    this.srs = srs;
    this.heater = heater;
    this.aux = aux;
    this.bluetooth = bluetooth;
    this.cruizControl = cruizControl;
    this.conditioning = conditioning;
    this.multimedia = multimedia;
    this.navigation = navigation;
    this.seatCondi = seatCondi;
    this.seatHeater = seatHeater;
    this.trunk = trunk;
    this.park = park;
    this.camera = camera;
    this.babyChair = babyChair;
    this.deliveryAuto = deliveryAuto;
    this.close = close;
    this.fullTank = fullTank;
  }
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  isofix: boolean;
  @ApiProperty()
  @Column()
  srs: boolean;
  @ApiProperty()
  @Column()
  heater: boolean;
  @ApiProperty()
  @Column()
  aux: boolean;
  @ApiProperty()
  @Column()
  bluetooth: boolean;
  @ApiProperty()
  @Column()
  cruizControl: boolean;
  @ApiProperty()
  @Column()
  conditioning: boolean;
  @ApiProperty()
  @Column()
  multimedia: boolean;
  @ApiProperty()
  @Column()
  navigation: boolean;
  @ApiProperty()
  @Column()
  seatCondi: boolean;
  @ApiProperty()
  @Column()
  seatHeater: boolean;
  @ApiProperty()
  @Column()
  trunk: boolean;
  @ApiProperty()
  @Column()
  park: boolean;
  @ApiProperty()
  @Column()
  camera: boolean;
  @ApiProperty()
  @Column()
  babyChair: boolean;
  @ApiProperty()
  @Column()
  deliveryAuto: boolean;
  @ApiProperty()
  @Column()
  close: boolean;
  @ApiProperty()
  @Column()
  fullTank: boolean;

  @ManyToOne(() => Autos, (auto) => auto.options)
  auto: Autos;
}
