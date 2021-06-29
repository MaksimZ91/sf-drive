import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MessagesEntity } from "./messages.entity";
import { Users } from "./users.entity";

@Entity()
export class ChatEntity{

  @PrimaryGeneratedColumn('uuid')
  id:number; 

  @ManyToOne(()=>Users)
  toUser:Users

  @ManyToOne(()=>Users, (user) => user.chat)
  user:Users

  @OneToMany(()=>MessagesEntity, (messages) => messages.chat)
  messages:MessagesEntity[]

}