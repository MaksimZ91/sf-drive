import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Autos } from './auto.entity';

@Entity()
export class AutoPhotoDocumentName {
  constructor(photoName: string) {
    this.photoName = photoName;
  }
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  photoName: string;

  @ManyToOne(() => Autos, (auto) => auto.photoDocumentName)
  auto: Autos;
}
