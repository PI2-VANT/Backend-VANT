import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vant, VantDocument } from './schemas/vant';
import { CreateVantDto } from './dto/create-vant.dto';

@Injectable()
export class VantService {
  constructor(@InjectModel(Vant.name) private vantModel: Model<VantDocument>) {}

  async create(createVantDto: CreateVantDto): Promise<Vant> {
    const createdVant = new this.vantModel(createVantDto);
    return createdVant.save();
  }

  async checkIfExist(registrationCode: string): Promise<boolean> {
    const vant = await this.vantModel.find({ registrationCode });
    if (vant) {
      return true;
    }
    return false;
  }

  async findOne(id: string): Promise<Vant> {
    return this.vantModel.findById(id);
  }

  async findAll(): Promise<Vant[]> {
    return this.vantModel.find().exec();
  }

  async deleteOne(id: string): Promise<any> {
    return this.vantModel.deleteOne({ _id: id });
  }
}
