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

  @Column({ type: 'simple-array', select: false })
  photoName: string[];

 @ManyToOne(() => Autos, auto=> auto.photoName)
  auto: Autos;
}
