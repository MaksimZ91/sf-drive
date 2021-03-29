import { Module } from '@nestjs/common';
import { RegistrController } from 'src/controller/rigistration.controller';
import { RegistrationService } from 'src/service/rigistration.service';


@Module({
  imports: [],
  controllers: [RegistrController],
  providers: [RegistrationService],
})
export class RegistrModul {}
