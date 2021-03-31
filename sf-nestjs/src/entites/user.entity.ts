;
import { Column, Entity, ObjectIdColumn, OneToMany, ObjectID, JoinTable  } from "typeorm";
import { Autos } from './auto.entity'


@Entity()
export class Users {

@ObjectIdColumn()
  _id:ObjectID ; 

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

  @OneToMany(()=>Autos, autos=>autos.user)
  autos:Autos[]

}