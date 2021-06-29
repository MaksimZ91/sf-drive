import { Module } from '@nestjs/common';
import { ArendaRepository } from 'src/repo/arenda.repository';
import { ArendaResolver } from 'src/user/arenda.resolver';
import { ArendaService } from 'src/service/arenda.service';
import { ArendaController } from 'src/controller/arenda.controller';
import { UserRepository } from 'src/repo/user.repository';
import { AutoRepository } from 'src/repo/auto.repository';
import { ChatRepository } from 'src/repo/chat.repositoy';


@Module({
  imports: [],
  controllers: [ArendaController],
  providers: [    
    ArendaRepository,   
    ArendaResolver,
    ArendaService,
    UserRepository,
    AutoRepository,
    ChatRepository
  ],
})
export class ArendaModule {}
