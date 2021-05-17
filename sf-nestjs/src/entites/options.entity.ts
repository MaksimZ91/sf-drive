import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Autos } from './auto.entity';

@Entity()
export class OptionsAuto {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isofix: boolean;

  @Column()
  srs: boolean;

  @Column()
  heater: boolean;

  @Column()
  aux: boolean;

  @Column()
  bluetooth: boolean;

  @Column()
  cruizControl: boolean;

  @Column()
  conditioning: boolean;

  @Column()
  multimedia: boolean;

  @Column()
  navigation: boolean;

  @Column()
  seatCondi: boolean;

  @Column()
  seatHeater: boolean;

  @Column()
  trunk: boolean;

  @Column()
  park: boolean;

  @Column()
  camera: boolean;

  @Column()
  babyChair: boolean;

  @Column()
  deliveryAuto: boolean;

  @Column()
  close: boolean;

  @Column()
  fullTank: boolean;

  @ManyToOne(() => Autos, auto => auto.options)
  auto: Autos;
}
