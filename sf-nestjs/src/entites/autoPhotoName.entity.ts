import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Autos } from './auto.entity';

@Entity()
export class AutoPhotoName {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photoName: string;

 @ManyToOne(() => Autos, auto=> auto.photoName)
  auto: Autos;
}
