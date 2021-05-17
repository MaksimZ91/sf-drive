import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthorizationModul } from './modules/authorization_authentication.module';
import { RegistrModul } from './modules/rigistration.module';
import { AutoModule } from './modules/auto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthorizationModul,
    RegistrModul,
    AutoModule,
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
      autoLoadEntities:true }),
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
