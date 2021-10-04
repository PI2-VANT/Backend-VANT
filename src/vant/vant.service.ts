import { Injectable } from '@nestjs/common';
import { CreateVantDto } from './dto/create-vant.dto';
import { UpdateVantDto } from './dto/update-vant.dto';

@Injectable()
export class VantService {
  create(createVantDto: CreateVantDto) {
    return 'This action adds a new vant';
  }

  findAll() {
    return `This action returns all vant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vant`;
  }

  update(id: number, updateVantDto: UpdateVantDto) {
    return `This action updates a #${id} vant`;
  }

  remove(id: number) {
    return `This action removes a #${id} vant`;
  }
}
