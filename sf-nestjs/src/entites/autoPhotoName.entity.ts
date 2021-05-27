import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Autos } from './auto.entity';

@Entity()
export class AutoPhotoName {
  constructor (photoName:string){
    this.photoName = photoName
  }
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photoName: string;

 @ManyToOne(() => Autos, auto=> auto.photoName)
  auto: Autos;
}
