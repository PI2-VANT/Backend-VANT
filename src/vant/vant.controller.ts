import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { VantService } from './vant.service';
import { FlyService } from './fly.service';
import { CreateVantDto } from './dto/create-vant.dto';
import { CreateFlyDto } from './dto/fly.dto';
// import { UpdateVantDto } from './dto/update-vant.dto';

@Controller('vant')
export class VantController {
  constructor(
    private readonly vantService: VantService,
    private readonly flyService: FlyService,
  ) {}

  @Post()
  create(@Body() createVantDto: CreateVantDto) {
    return this.vantService.create(createVantDto);
  }

  @Get('vant-fly-history/:id')
  async getVantFlyHistory(@Param('id') flyCode: string) {
    return await this.flyService.findFlyCodeHistory(flyCode);
  }

  @Get('get-fly-data/:id')
  async getFlyData(@Param('id') flyCode: string) {
    return await this.flyService.findFlyData(flyCode);
  }

  @Post('/fly-data/:id')
  async addFlyData(
    @Param(':id') vantId: string,
    @Body() createFlyDto: CreateFlyDto,
  ) {
    const vant = await this.vantService.checkIfExist(vantId);
    if (vant) {
      return this.flyService.create(createFlyDto);
    }
    return 'Este vant precisar ser registrado';
  }

  @Get('/all')
  findAll() {
    return this.vantService.findAll();
  }

  @Get(':id')
  finOne(@Param('id') id: string) {
    console.log(id);
    return this.vantService.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.vantService.deleteOne(id);
  }
}
