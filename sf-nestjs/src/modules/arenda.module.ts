import { Module } from '@nestjs/common';
import { ArendaRepository } from 'src/repo/arenda.repository';
import { ArendaResolver } from 'src/user/arenda.resolver';
import { ArendaService } from 'src/service/arenda.service';
import { ArendaController } from 'src/controller/arenda.controller';


@Module({
  imports: [],
  controllers: [ArendaController],
  providers: [    
    ArendaRepository,   
    ArendaResolver,
    ArendaService
  ],
})
export class ArendaModule {}
