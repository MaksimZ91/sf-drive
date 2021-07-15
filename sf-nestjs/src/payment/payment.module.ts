import { HttpModule, HttpService, Module } from '@nestjs/common';
import { ArendaRepository } from 'src/repo/arenda.repository';
import { AutoRepository } from 'src/repo/auto.repository';
import { ChatRepository } from 'src/repo/chat.repositoy';
import { OptionsRepository } from 'src/repo/options.repository';
import { PhotoRepository } from 'src/repo/photo.repository';
import { PhotoDocumentRepository } from 'src/repo/photoDocument.repository';
import { UserRepository } from 'src/repo/user.repository';
import { ArendaService } from 'src/service/arenda.service';
import { AutoService } from 'src/service/auto.service';
import { ChatService } from 'src/service/chat.service';
import { UserSevice } from 'src/service/user.service';
import { TransferController } from './transfer/transfer.controller';

@Module({
  imports:[HttpModule],
  controllers: [TransferController],  
  providers: [
    UserSevice,
    UserRepository,
    AutoService,
    AutoRepository,
    OptionsRepository,
    PhotoRepository,
    PhotoDocumentRepository,
    ArendaService,
    ArendaRepository,
    ChatRepository,
    ChatService
  ],
})
export class PaymentModule {}
