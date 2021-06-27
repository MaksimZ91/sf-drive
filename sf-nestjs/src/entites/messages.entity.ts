import { Column, Entity,  ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";


Entity()
export class Messages{
  constructor (body:string){
    this.body = body
  }
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  body:string;

  @Column()
  createdAt:number = Date.now();

  @ManyToOne(()=>Users)
  user:Users

  @ManyToOne(()=>Users)
  toUser:Users
}