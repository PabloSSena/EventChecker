import { Module } from '@nestjs/common';
import { CommunitiesService } from './communities.service';
import { CommunitiesController } from './communities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Communitie, CommunitieSchema } from 'schemas/communitie.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Communitie.name, schema: CommunitieSchema}])],
  controllers: [CommunitiesController],
  providers: [CommunitiesService],
})
export class CommunitiesModule {}
