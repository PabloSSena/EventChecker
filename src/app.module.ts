/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommunitiesModule } from './communities/communities.module';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/nest'), CommunitiesModule, PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
