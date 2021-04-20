import { Column, Entity, ManyToOne, ObjectIdColumn,ObjectID } from "typeorm";
import { Users } from './user.entity'


@Entity()
export class OptionsAuto {

@ObjectIdColumn()
  _id:ObjectID; 

  @Column()
  isofix:boolean;;

  @Column()
  srs:boolean;

  @Column()
  heater:boolean;

  @Column()
  aux:boolean;

  @Column()
  bluetooth:boolean;

  @Column() 
  cruizControl:boolean;

  @Column()   
  conditioning:boolean;

  @Column()  
  multimedia:boolean;

  @Column()  
  navigation:boolean;

  @Column()  
  seatCondi:boolean;
  
  @Column()  
  seatHeater:boolean;

  @Column() 
  trunk:boolean; 

  @Column()
  park:boolean;

  @Column()
  camera:boolean;

  @Column()
  babyChair:boolean;

  @Column()  
  deliveryAuto:boolean;

  @Column()    
  close:boolean;

  @Column() 
  fullTank:boolean;
}