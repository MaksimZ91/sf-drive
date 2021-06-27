import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Arenda } from './arenda.entity';
import { Autos } from './auto.entity';
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

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fio: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  phone: string;

  @Column()
  date: string;

  @Column({ select: false })
  number: string;

  @Column({ select: false })
  passDate: string;

  @Column({ select: false })
  about: string;

  @Column({ select: false })
  cod: string;

  @Column({ select: false })
  numberLicense: string;

  @Column({ select: false })
  dateLicense: string;

  @Column({ select: false })
  refToken: string;

  @OneToMany(() => Autos, (autos) => autos.user, {
    cascade: true,
  })
  autos: Autos[];

  @OneToMany(()=>MessagesEntity, (messages) => messages.user)
  messages:MessagesEntity[]

  @OneToMany(() => Arenda, (arenda) => arenda.user)
  arenda: Arenda[];
}
