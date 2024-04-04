import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Patch(':id/checkin')
  CheckIn(@Param('id') id: string) {
    return this.peopleService.CheckIn(id);
  }

  @Patch(':id/checkout')
  CheckOut(@Param('id') id: string) {
    return this.peopleService.CheckOut(id);
  }

}
