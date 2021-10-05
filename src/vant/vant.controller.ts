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
import { CreateVantDto } from './dto/create-vant.dto';
// import { UpdateVantDto } from './dto/update-vant.dto';

@Controller('vant')
export class VantController {
  constructor(private readonly vantService: VantService) {}

  @Post()
  create(@Body() createVantDto: CreateVantDto) {
    return this.vantService.create(createVantDto);
  }

  @Get('/all')
  findAll() {
    return this.vantService.findAll();
  }

  @Get(':id')
  finOne(@Param('id') id: string) {
    return this.vantService.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.vantService.deleteOne(id);
  }
}
