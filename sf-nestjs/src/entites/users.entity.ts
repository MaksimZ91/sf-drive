import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Arenda } from './arenda.entity';
import { Autos } from './auto.entity';

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

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  date: string;

  @Column()
  number: string;

  @Column()
  passDate: string;

  @Column()
  about: string;

  @Column()
  cod: string;

  @Column()
  numberLicense: string;

  @Column()
  dateLicense: string;

  @Column()
  refToken: string;

  @OneToMany(() => Autos, (autos) => autos.user, {
    cascade: true,
  })
  autos: Autos[];

  @OneToMany(() => Arenda, (arenda) => arenda.user)
  arenda: Arenda;
}
