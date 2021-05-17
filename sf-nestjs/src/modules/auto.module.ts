import { Module } from '@nestjs/common';
import { AutoController } from 'src/controller/auto.controller';
import { ArendaRepository } from 'src/repo/arenda.repository';
import { AutoRepository } from 'src/repo/auto.repository';
import { OptionsRepository } from 'src/repo/options.repository';
import { PhotoRepository } from 'src/repo/photo.repository';
import { PhotoDocumentRepository } from 'src/repo/photoDocument.repository';
import { UserRepository } from 'src/repo/user.repository';
import { AutoService } from 'src/service/auto.service';

@Module({
  imports: [],
  controllers: [AutoController],
  providers: [
    AutoService,
    UserRepository,
    AutoRepository,
    OptionsRepository,
    PhotoRepository,
    PhotoDocumentRepository,
    ArendaRepository,
  ],
})
export class AutoModule {}
