import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import * as ormconfig from '../ormconfig';
import { ApolloDriver } from '@nestjs/apollo'
import { NoticeModule } from './notice/notice.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  UserModule,
  NoticeModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}