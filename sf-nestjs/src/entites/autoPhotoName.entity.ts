import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Autos } from './auto.entity';

@Entity()
export class AutoPhotoName {
  constructor(photoName: string) {
    this.photoName = photoName;
  }
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  photoName: string;

  @ManyToOne(() => Autos, (auto) => auto.photoName)
  auto: Autos;
}
