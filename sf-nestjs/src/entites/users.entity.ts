import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Autos } from './auto.entity';

@Entity()
export class Users {
  
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

  @OneToMany(() => Autos, autos => autos.user, {
    cascade: true,
})
  autos: Autos[];
}