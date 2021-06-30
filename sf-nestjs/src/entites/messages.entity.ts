import { Column, Entity,  ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChatEntity } from "./chat.entity";
import { Users } from "./users.entity";


@Entity()
export class MessagesEntity{
  constructor (body:string, user:Users, toUser:Users, chat?:ChatEntity){
    this.body = body,
    this.user = user
    this.toUser = toUser
    this.chat = chat
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