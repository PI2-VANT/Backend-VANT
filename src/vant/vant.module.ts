import { Module } from '@nestjs/common';
import { VantService } from './vant.service';
import { FlyService } from './fly.service';
import { VantController } from './vant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vant, VantSchema } from './schemas/vant';
import { Fly, FlySchema } from './schemas/fly';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vant.name, schema: VantSchema },
      { name: Fly.name, schema: FlySchema },
    ]),
  ],
  controllers: [VantController],
  providers: [VantService, FlyService],
})
export class VantModule {}
