import { Column, Entity, ManyToOne, ObjectIdColumn,ObjectID } from "typeorm";
import { Autos } from "./auto.entity";



@Entity()
export class AutoPhotoName {

@ObjectIdColumn()
  _id:ObjectID; 

  @Column()
  photoName:[]

  @ManyToOne(()=>Autos, auto=>auto.photoName)
  auto:Autos
}