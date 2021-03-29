import { Module } from '@nestjs/common';
import { AutoController } from 'src/controller/auto.controller';
import { AutoService } from 'src/service/auto.service';



@Module({
  imports: [],
  controllers: [AutoController],
  providers: [AutoService],
})
export class AutoModule {}
