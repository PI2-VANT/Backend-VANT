import { Module } from '@nestjs/common';
import { VantService } from './vant.service';
import { VantController } from './vant.controller';

@Module({
  controllers: [VantController],
  providers: [VantService]
})
export class VantModule {}
