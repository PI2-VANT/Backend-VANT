import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Fly, FlyDocument } from './schemas/fly';
import { CreateFlyDto } from './dto/fly.dto';

@Injectable()
export class FlyService {
  constructor(@InjectModel(Fly.name) private flyModel: Model<FlyDocument>) {}

  async create(createFlyDto: CreateFlyDto): Promise<Fly> {
    const createdVant = new this.flyModel(createFlyDto);
    return createdVant.save();
  }

  async findFlyCodeHistory(registrationCode: string): Promise<string[]> {
    const result = await this.flyModel.distinct('flyCode', {
      registrationCode: registrationCode,
    });

    return result;
  }
  async findFlyData(flyCode: string): Promise<Fly[]> {
    return await this.flyModel.find({ flyCode });
  }

  async deleteOne(id: string): Promise<any> {
    return this.flyModel.deleteOne({ _id: id });
  }
}
