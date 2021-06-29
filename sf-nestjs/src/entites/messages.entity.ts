import { Column, Entity,  ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChatEntity } from "./chat.entity";
import { Users } from "./users.entity";


@Entity()
export class MessagesEntity{
  constructor (body:string){
    this.body = body
  }
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  body:string;

  @Column({ type:'bigint', update: false })
  createdAt: number = Date.now()

  @ManyToOne(()=>Users, (user) => user.messages)
  user:Users

  @ManyToOne(()=>Users)
  toUser:Users
  
  @ManyToOne(()=>ChatEntity, (chat)=>chat.messages)
  chat:ChatEntity
}