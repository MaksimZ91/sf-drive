import { ObjectId } from "mongoose";
import { Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class Autos {

@ObjectIdColumn()
  id:ObjectId; 

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
  isofix:boolean;

  @Column()
  srs:boolean;

  
  @Column()
  heater:boolean;  

  @Column()
  bluetooth:boolean;

  @Column()
  cruis:boolean;

  @Column()
  condi:boolean;

  @Column()
  media:boolean;

  @Column()
  navigation:boolean;

  @Column()
  ventiSeat:boolean;

  @Column()
  HeaterSeat:boolean;


}