import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Arenda } from './arenda.entity';
import { Autos } from './auto.entity';
import { ChatEntity } from './chat.entity';
import { MessagesEntity } from './messages.entity';


@Entity()
export class Users {
  constructor(
    fio: string,
    email: string,
    phone: string,
    date: string,
    number: string,
    passDate: string,
    about: string,
    cod: string,
    numberLicense: string,
    dateLicense: string,
  ) {
    this.fio = fio;
    this.email = email;
    this.phone = phone;
    this.date = date;
    this.number = number;
    this.passDate = passDate;
    this.about = about;
    this.cod = cod;
    this.numberLicense = numberLicense;
    this.dateLicense = dateLicense;
  }
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  fio: string;
  @ApiProperty()
  @Column()
  email: string;
  @ApiProperty()
  @Column()
  password: string;
  @ApiProperty()
  @Column()
  phone: string;
  @ApiProperty()
  @Column()
  date: string;
  @ApiProperty()
  @Column({ select: false })
  number: string;
  @ApiProperty()
  @Column({ select: false })
  passDate: string;
  @ApiProperty()
  @Column({ select: false })
  about: string;
  @ApiProperty()
  @Column({ select: false })
  cod: string;
  @ApiProperty()
  @Column({ select: false })
  numberLicense: string;
  @ApiProperty()
  @Column({ select: false })
  dateLicense: string;
  @ApiProperty()
  @Column({ select: false })
  refToken: string;

  @OneToMany(() => Autos, (autos) => autos.user, {
    cascade: true,
  })
  autos: Autos[];

  @OneToMany(()=>MessagesEntity, (messages) => messages.user)
  messages:MessagesEntity[]

  @OneToMany(()=>ChatEntity, (chat) => chat.user)
  chat:ChatEntity

  @OneToMany(() => Arenda, (arenda) => arenda.user)
  arenda: Arenda[];
 
}
