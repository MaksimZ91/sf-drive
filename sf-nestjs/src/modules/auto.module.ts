import { Module } from '@nestjs/common';
import { AutoController } from 'src/controller/auto.controller';
import { AutoRepository } from 'src/repo/auto.repository';
import { UserRepository } from 'src/repo/user.repository';
import { AutoService } from 'src/service/auto.service';



@Module({
  imports: [],
  controllers: [AutoController],
  providers: [AutoService, UserRepository, AutoRepository],
})
export class AutoModule {}
