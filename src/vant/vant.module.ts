import { Module } from '@nestjs/common';
import { VantService } from './vant.service';
import { VantController } from './vant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vant, VantSchema } from './schemas/vant';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vant.name, schema: VantSchema }]),
  ],
  controllers: [VantController],
  providers: [VantService],
})
export class VantModule {}
