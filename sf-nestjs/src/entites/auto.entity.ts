import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AutoPhotoName } from './autoPhotoName.entity';
import { OptionsAuto } from './options.entity';
import { Users } from './users.entity';
import { AutoPhotoDocumentName } from './autoPhotoDocument.entity';
import { Arenda } from './arenda.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Autos {
  constructor(
    mark: string,
    model: string,
    year: string,
    number: string,
    vin: string,
    collor: string,
    volume: string,
    power: string,
    transmission: string,
    mileage: string,
    pts: string,
    price: string,
    priceThreeDays: string,
    priceFiveDays: string,
    osago: string,
    kasko: string,
    privod: string,
    motor: string,
    body: string,
    sts: string,
    type: string,
  ) {
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.number = number;
    this.vin = vin;
    this.collor = collor;
    this.volume = volume;
    this.power = power;
    this.transmission = transmission;
    this.mileage = mileage;
    this.pts = pts;
    this.price = price;
    this.priceThreeDays = priceThreeDays;
    this.priceFiveDays = priceFiveDays;
    this.osago = osago;
    this.kasko = kasko;
    this.privod = privod;
    this.motor = motor;
    this.body = body;
    this.sts = sts;
    this.type = type;
  }
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  mark: string;
  @ApiProperty()
  @Column()
  model: string;
  @ApiProperty()
  @Column()
  year: string;
  @ApiProperty()
  @Column()
  number: string;
  @ApiProperty()
  @Column({ select: false })
  vin: string;
  @ApiProperty()
  @Column()
  collor: string;
  @ApiProperty()
  @Column()
  volume: string;
  @ApiProperty()
  @Column()
  power: string;
  @ApiProperty()
  @Column()
  transmission: string;
  @ApiProperty()
  @Column()
  mileage: string;
  @ApiProperty()
  @Column({ select: false })
  pts: string;
  @ApiProperty()
  @Column()
  price: string;
  @ApiProperty()
  @Column()
  priceThreeDays: string;
  @ApiProperty()
  @Column()
  priceFiveDays: string;
  @ApiProperty()
  @Column({ select: false })
  osago: string;
  @ApiProperty()
  @Column({ select: false })
  kasko: string;
  @ApiProperty()
  @Column()
  privod: string;
  @ApiProperty()
  @Column()
  motor: string;
  @ApiProperty()
  @Column()
  body: string;
  @ApiProperty()
  @Column({ select: false })
  sts: string;
  @ApiProperty()
  @Column()
  type: string;

  @ManyToOne(() => Users, (user) => user.autos)
  user: Users;

  @OneToMany(() => OptionsAuto, (options) => options.auto)
  options: OptionsAuto[];

  @OneToMany(() => AutoPhotoName, (photoName) => photoName.auto)
  photoName: AutoPhotoName[];

  @OneToMany(
    () => AutoPhotoDocumentName,
    (photoDocumentName) => photoDocumentName.auto,
  )
  photoDocumentName: AutoPhotoDocumentName[];

  @OneToMany(() => Arenda, (arenda) => arenda.auto)
  arenda: Arenda[];

  
}
