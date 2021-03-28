import { Module } from '@nestjs/common';
import { AutoController } from 'src/controller/auto.controller';
import { AutoService } from 'src/service/auto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../Shemas/UserShema';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AutoController],
  providers: [AutoService ],
})
export class AutoModule {}
