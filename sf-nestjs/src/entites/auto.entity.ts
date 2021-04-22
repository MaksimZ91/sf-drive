import { Column, Entity, ManyToOne, ObjectIdColumn,ObjectID, OneToMany } from "typeorm";
import { AutoPhotoName } from "./autoPhotoName.entity";
import { OptionsAuto } from "./options.entity";
import { Users } from './user.entity'


@Entity()
export class Autos {

@ObjectIdColumn()
  _id:ObjectID; 

  @Column()
  mark:string;

  @Column()
  model:string;

  @Column()
  year:string; 

  @Column()
  number:string;

  @Column()
  vin:string;

  @Column()
  collor:string;

  @Column()
  volume:string;

  @Column()
  power:string;

  @Column()
  transmission:string;

  @Column()
  mileage:string; 

  @Column()
  pts:string;
  
  @Column()
  price:string;

  @Column()
  priceThreeDays:string;

  @Column()
  priceFiveDays:string;

  @Column()
  osago:string;

  @Column()
  kasko:string;

  @Column()
  privod:string;

  @Column()
  motor:string;

  @Column()
  body:string;

  @Column()
  sts:string;

  @ManyToOne(()=>Users, user=>user.autos)
  user:Users

  @OneToMany(()=>OptionsAuto, options=>options.auto)
  options:OptionsAuto[]

  @OneToMany(()=>AutoPhotoName, photoName=>photoName.auto)
  photoName:AutoPhotoName[]
}