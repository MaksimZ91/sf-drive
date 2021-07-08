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
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDay: Date;

  @Column()
  endDay: Date;

  @Column()
  cost: number;

  @Column({default:null})
  status: string;

  @Column()
  coment: string;

  @Column()
  babyChair: boolean;

  @Column()
  deliveryAuto: boolean;

  @Column()
  close: boolean;

  @Column()
  fullTank: boolean;

  @Column()  
  bookingTime: string;

  @ManyToOne(() => Autos, (auto) => auto.arenda)
  auto: Autos;

  @ManyToOne(() => Users, (user) => user.arenda)
  user: Users;
}
