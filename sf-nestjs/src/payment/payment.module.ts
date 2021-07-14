import { Module } from '@nestjs/common';
import { AutoRepository } from 'src/repo/auto.repository';
import { OptionsRepository } from 'src/repo/options.repository';
import { PhotoRepository } from 'src/repo/photo.repository';
import { PhotoDocumentRepository } from 'src/repo/photoDocument.repository';
import { UserRepository } from 'src/repo/user.repository';
import { AutoService } from 'src/service/auto.service';
import { UserSevice } from 'src/service/user.service';
import { TransferController } from './transfer/transfer.controller';

@Module({
  imports:[UserMo],
  controllers: [TransferController],  
  providers: [
    UserSevice,
    UserRepository,
    AutoService,
    AutoRepository,
    OptionsRepository,
    PhotoRepository

  ],
})
export class PaymentModule {}
