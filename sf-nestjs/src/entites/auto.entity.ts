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

@Entity()
export class Autos {
  constructor(mark:string, model:string, year:string, number:string,vin:string,
    collor:string, volume:string,power:string,transmission:string,mileage:string,
    pts:string, price:string, priceThreeDays:string, priceFiveDays:string, osago:string,
    kasko:string, privod:string, motor:string, body:string, sts:string, type:string  ){
      
      this.mark = mark;
      this.model= model;
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

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mark: string;

  @Column()
  model: string;

  @Column()
  year: string;

  @Column()
  number: string;

  @Column()
  vin: string;

  @Column()
  collor: string;

  @Column()
  volume: string;

  @Column()
  power: string;

  @Column()
  transmission: string;
    
  @Column()
  mileage: string;

  @Column()
  pts: string;

  @Column()
  price: string;

  @Column()
  priceThreeDays: string;

  @Column()
  priceFiveDays: string;

  @Column()
  osago: string;

  @Column()
  kasko: string;

  @Column()
  privod: string;

  @Column()
  motor: string;

  @Column()
  body: string;

  @Column()
  sts: string;

  @Column()
  type: string;

  @ManyToOne(() => Users, user => user.autos)
  user: Users;

  @OneToMany(() => OptionsAuto, options => options.auto)
  options: OptionsAuto[];

  @OneToMany(() => AutoPhotoName, photoName => photoName.auto)
  photoName: AutoPhotoName[];

  @OneToMany(() => AutoPhotoDocumentName, photoDocumentName => photoDocumentName.auto)
  photoDocumentName: AutoPhotoDocumentName[];

  @OneToMany(() => Arenda, arenda => arenda.auto)
  arenda: Arenda[];

  
}
