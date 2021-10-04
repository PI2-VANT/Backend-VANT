import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VantService } from './vant.service';
import { CreateVantDto } from './dto/create-vant.dto';
import { UpdateVantDto } from './dto/update-vant.dto';

@Controller('vant')
export class VantController {
  constructor(private readonly vantService: VantService) {}

  @Post()
  create(@Body() createVantDto: CreateVantDto) {
    return this.vantService.create(createVantDto);
  }

  @Get()
  findAll() {
    return this.vantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVantDto: UpdateVantDto) {
    return this.vantService.update(+id, updateVantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vantService.remove(+id);
  }
}
