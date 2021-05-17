import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Autos } from './auto.entity';

@Entity()
export class AutoPhotoDocumentName {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'simple-array', select: false })
  photoName: string[];

  @ManyToOne(() => Autos, auto => auto.photoDocumentName)
  auto: Autos;
}
