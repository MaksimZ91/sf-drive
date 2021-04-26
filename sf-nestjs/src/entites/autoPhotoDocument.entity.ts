import { Column, Entity, ManyToOne, ObjectIdColumn,ObjectID } from "typeorm";
import { Autos } from "./auto.entity";



@Entity()
export class AutoPhotoDocumentName {

@ObjectIdColumn()
  _id:ObjectID; 

  @Column()
  photoName:[]

  @ManyToOne(()=>Autos, auto=>auto.photoDocumentName)
  auto:Autos
}