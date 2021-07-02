import { Column, Entity,  ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChatEntity } from "./chat.entity";
import { Users } from "./users.entity";


@Entity()
export class MessagesEntity{
  constructor (body:string, user:Users, toUser:Users, chat?:ChatEntity, system?:boolean, arendaID?:number){
    this.body = body,
    this.user = user
    this.toUser = toUser
    this.chat = chat
    this.system = system
    this.arendaID = arendaID
  }
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  body:string;

  @Column({default:null})
  arendaID:number;

  @Column({default:false})
  system:boolean;

  @Column({ type:'bigint', update: false })
  createdAt: number = Date.now()

  @ManyToOne(()=>Users, (user) => user.messages)
  user:Users

  @ManyToOne(()=>Users)
  toUser:Users
  
  @ManyToOne(()=>ChatEntity, (chat)=>chat.messages)
  chat:ChatEntity
}