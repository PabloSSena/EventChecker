import { Injectable } from '@nestjs/common';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Communitie } from 'schemas/communitie.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommunitiesService {

  constructor(@InjectModel(Communitie.name) private CommunitieModel: Model<Communitie>){

  }

  async create(createCommunityDto: CreateCommunityDto): Promise<Communitie> {
    const createdCommunity =  new this.CommunitieModel(createCommunityDto);
    return createdCommunity.save();
  }

  findAll() {
    return this.CommunitieModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} community`;
  // }

  // update(id: number, updateCommunityDto: UpdateCommunityDto) {
  //   return `This action updates a #${id} community`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} community`;
  // }
}
