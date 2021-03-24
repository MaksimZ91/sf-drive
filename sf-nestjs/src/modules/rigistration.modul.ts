import { Module } from '@nestjs/common';
import { RegistrController } from 'src/controller/rigistration.controller';
import { RegistrationService } from 'src/service/rigistration.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../Shemas/UserShema';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [RegistrController],
  providers: [RegistrationService],
})
export class RegistrModul {}
