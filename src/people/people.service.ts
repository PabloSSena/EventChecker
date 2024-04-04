import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PeopleService {
  constructor(@InjectModel(
    Person.name
    ) private PersonModel: Model<Person>){

  }

  create(createPersonDto: CreatePersonDto) {
    const createdPerson =  new this.PersonModel(createPersonDto)
    return createdPerson.save();
  }

  CheckIn(id: number) {
    return `This action returns a #${id} person`;
  }

  CheckOut(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
