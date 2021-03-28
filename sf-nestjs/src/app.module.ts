import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorizationModul } from './modules/authorization_authentication.module'
import { RegistrModul } from './modules/rigistration.module'
import { AutoModule } from './modules/auto.module'
import { TypeOrmModule } from '@nestjs/typeorm'


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
            RegistrModul,
            AutoModule,
            TypeOrmModule.forRoot({
              name: 'default',
              type:'mongodb',
              host:'localhosat',
              url: process.env.DATABASE_USER,
              port:27017,
              database:"sf_db",
              useNewUrlParser:true,
              useUnifiedTopology:true,
              entities:[
                `${__dirname}/**/*.entity.{ts,js}`
              ]
            })
          ],
  controllers: [],
  providers: [],
})
export class AppModule {}
