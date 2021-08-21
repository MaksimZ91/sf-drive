import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class UserPhotoDocumentName {
  constructor(photoName: string) {
    this.photoName = photoName;
  }
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  photoName: string;

  @ManyToOne(() => Users, (user) => user.photoDocumentName)
  user: Users;
}
