import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Person } from './entities/person.entity';
import { PeopleSchema } from 'schemas/people.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Person.name, schema: PeopleSchema}])],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
