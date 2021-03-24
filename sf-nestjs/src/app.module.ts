import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorizationModul } from './modules/authorization_authentication.modul'
import { RegistrModul } from './modules/rigistration.modul'


@Module({ 
   
  imports: [MongooseModule.forRootAsync({
            imports:[ConfigModule],
            useFactory:async (configService:ConfigService)=>({
              uri:configService.get("DATABASE_USER")}),
            inject:[ConfigService]
            }),
            ConfigModule.forRoot({
              isGlobal: true,                                      
            }),
            AuthorizationModul,
            RegistrModul,],
  controllers: [],
  providers: [],
})
export class AppModule {}
