import { Column, Entity, ManyToOne, ObjectIdColumn,ObjectID } from "typeorm";
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
  millege:string; 

  @Column()
  numberPTS:string;
  
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
  fuel:string;

  @Column()
  body:string;

  @ManyToOne(()=>Users, user=>user.autos)
  user:Users




}