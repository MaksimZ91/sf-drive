import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Autos } from './auto.entity';

@Entity()
export class Arenda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDay: Date;

  @Column()
  endDay: Date;

  @ManyToOne(() => Autos, (auto) => auto.arenda)
  auto: Autos;
}
