import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Fly, FlyDocument } from './schemas/fly';
import { CreateFlyDto } from './dto/fly.dto';
import { VantService } from './vant.service';

@Injectable()
export class FlyService {
  constructor(
    @InjectModel(Fly.name) private flyModel: Model<FlyDocument>,
    private readonly vantService: VantService,
  ) {}

  async create(createFlyDto: CreateFlyDto): Promise<Fly> {
    const check = await this.flyModel
      .findOne({
        flyCode: createFlyDto.flyCode,
      })
      .where({ registrationCode: createFlyDto.registrationCode });

    if (!check) {
      console.log(console.log('teste'));
      const createdVant = new this.flyModel({
        flyCode: createFlyDto.flyCode,
        velocidade: createFlyDto.velocidade,
        bateria: createFlyDto.bateria,
        pesticida: createFlyDto.pesticida,
        temperatura: createFlyDto.temperatura,
        umidade: createFlyDto.umidade,
        latitude: createFlyDto.latitude,
        longitude: createFlyDto.longitude,
        date: createFlyDto.date,
        registrationCode: createFlyDto.registrationCode,
        start: true,
      });
      return createdVant.save();
    } else {
      const createdVant = new this.flyModel(createFlyDto);
      return createdVant.save();
    }
  }

  async getUserVantsFlysHistory(userId: string): Promise<any[]> {
    const vants = await this.vantService.getMyVants(userId);
    // eslint-disable-next-line prefer-const
    let flys = [];
    if (vants.length >= 1) {
      for (let i = 0; i < vants.length; i++) {
        const data = await this.flyModel
          .find({ registrationCode: vants[i].registrationCode })
          .where({ start: true });
        flys.push({ vantName: vants[i].name, voos: data });
      }
    }

    return flys;
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
