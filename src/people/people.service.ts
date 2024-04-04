import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Communitie } from 'schemas/communitie.schema';
import { Community } from 'src/communities/entities/community.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectModel(Person.name) private PersonModel: Model<Person>,
    @InjectModel(Communitie.name) private CommunitieModel: Model<Communitie>
    ){

  }

  create(createPersonDto: CreatePersonDto) {
    const createdPerson =  new this.PersonModel(createPersonDto)
    return createdPerson.save();
  }

  async CheckIn(id: string) {
    const convertedId = new mongoose.Types.ObjectId(id);
    const person = await this.PersonModel.findById(convertedId);
    const eventId = person.communitie_id;
    console.log(person);

    const updatedEvent = await this.CommunitieModel.findByIdAndUpdate(
      eventId,{$inc:{checkIn: 1}},
      {new:true}
    )  
    
    return updatedEvent;

  }

  async CheckOut(id: string) {
    const convertedId = new mongoose.Types.ObjectId(id);
    const person = await this.PersonModel.findById(convertedId);
    const eventId = person.communitie_id;

    const updateCheckIn = await this.CommunitieModel.findByIdAndUpdate(
      eventId,{$inc:{checkIn: -1}},
      {new:true}
    )
    const updateCheckOut = await this.CommunitieModel.findByIdAndUpdate(
      eventId,{$inc:{checkOut: 1}},
      {new:true}
    )  
    
    return updateCheckOut;
  }

}
