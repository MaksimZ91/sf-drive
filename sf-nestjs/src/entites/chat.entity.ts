import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MessagesEntity } from "./messages.entity";
import { Users } from "./users.entity";

@Entity()
export class ChatEntity{
  constructor (user:Users, toUser:Users, message?:MessagesEntity[]){
    this.user = user
    this.toUser = toUser
    this.messages = message
  }

  @PrimaryGeneratedColumn('uuid')
  id:number; 

  @ManyToOne(()=>Users)
  toUser:Users

  @ManyToOne(()=>Users, (user) => user.chat)
  user:Users

  @OneToMany(()=>MessagesEntity, (messages) => messages.chat)
  messages:MessagesEntity[]

}