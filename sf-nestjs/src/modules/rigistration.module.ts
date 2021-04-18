import { Module } from '@nestjs/common';
import { RegistrController } from 'src/controller/rigistration.controller';
import { RegistrationService } from 'src/service/rigistration.service';
import { UserRepository } from '../repo/user.repository'


@Module({
  imports: [],
  controllers: [RegistrController],
  providers: [RegistrationService, UserRepository],
})

export class RegistrModul {}
