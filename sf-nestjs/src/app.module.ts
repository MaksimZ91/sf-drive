import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AuthorizationModul } from './modules/authorization_authentication.module'
import { RegistrModul } from './modules/rigistration.module'
import { AutoModule } from './modules/auto.module'
import { TypeOrmModule } from '@nestjs/typeorm'


@Module({    
  imports: [ConfigModule.forRoot({
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
