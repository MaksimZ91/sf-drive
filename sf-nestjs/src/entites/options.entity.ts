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

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isofix: boolean;

  @Column()
  srs: boolean;

  @Column()
  heater: boolean;

  @Column()
  aux: boolean;

  @Column()
  bluetooth: boolean;

  @Column()
  cruizControl: boolean;

  @Column()
  conditioning: boolean;

  @Column()
  multimedia: boolean;

  @Column()
  navigation: boolean;

  @Column()
  seatCondi: boolean;

  @Column()
  seatHeater: boolean;

  @Column()
  trunk: boolean;

  @Column()
  park: boolean;

  @Column()
  camera: boolean;

  @Column()
  babyChair: boolean;

  @Column()
  deliveryAuto: boolean;

  @Column()
  close: boolean;

  @Column()
  fullTank: boolean;

  @ManyToOne(() => Autos, (auto) => auto.options)
  auto: Autos;
}
