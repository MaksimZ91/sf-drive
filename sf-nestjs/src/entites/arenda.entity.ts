import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Autos } from './auto.entity';
import { Users } from './users.entity';

@Entity()
export class Arenda {
  constructor(startDay: Date,
     endDay: Date,
     cost:number,
     coment:string,
     babyChair: boolean,
     deliveryAuto: boolean,
     close: boolean,
     fullTank: boolean,
    ) {
      this.startDay = startDay;
      this.endDay = endDay;
      this.cost = cost;
      this.coment = coment;
      this.babyChair = babyChair;
      this.deliveryAuto = deliveryAuto;
      this.close = close;
      this.fullTank = fullTank;
    }
  @ApiProperty()    
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  startDay: Date;
  @ApiProperty()
  @Column()
  endDay: Date;
  @ApiProperty()
  @Column()
  cost: number;
  @ApiProperty()
  @Column({default:null})
  status: string;
  @ApiProperty()
  @Column()
  coment: string;
  @ApiProperty()
  @Column()
  babyChair: boolean;
  @ApiProperty()
  @Column()
  deliveryAuto: boolean;
  @ApiProperty()
  @Column()
  close: boolean;
  @ApiProperty()
  @Column()
  fullTank: boolean;
  @ApiProperty()
  @Column()  
  bookingTime: Date;
 
  @ManyToOne(() => Autos, (auto) => auto.arenda)
  auto: Autos;
 
  @ManyToOne(() => Users, (user) => user.arenda)
  user: Users;
}
