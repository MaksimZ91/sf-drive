import { ObjectId } from "mongoose";
import { Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class User {

@ObjectIdColumn()
  id:ObjectId; 

  @Column()
  fio:string;

  @Column()
  email:string;

  @Column()
  password:string; 

  @Column()
  phone:string;

  @Column()
  date:string;

  @Column()
  number:string;

  @Column()
  passDate:string;

  @Column()
  about:string;

  @Column()
  cod:string;

  @Column()
  numberLicense:string; 

  @Column()
  dateLicense:string;
  
  @Column()
  refToken:string;

}