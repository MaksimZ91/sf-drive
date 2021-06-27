import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthorizationModul } from './modules/authorization_authentication.module';
import { RegistrModul } from './modules/rigistration.module';
import { AutoModule } from './modules/auto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DateScalar } from './DateScalar';
import { ArendaModule } from './modules/arenda.module';
import { ChatModule } from './modules/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthorizationModul,
    ArendaModule,
    RegistrModul,
    AutoModule,
    ChatModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        name: 'default',
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'bd28e09f',
        database: 'sf_db',
        entities: [__dirname + '/**/*.entity.{ts,js}'],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    MulterModule.register({
      dest: './files',
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), '/src/graphql.ts'),
      },
    }),
    ChatModule,
  ],
  controllers: [],
  providers: [DateScalar],
})
export class AppModule {}
