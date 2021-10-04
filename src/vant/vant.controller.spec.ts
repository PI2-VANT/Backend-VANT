import { Test, TestingModule } from '@nestjs/testing';
import { VantController } from './vant.controller';
import { VantService } from './vant.service';

describe('VantController', () => {
  let controller: VantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VantController],
      providers: [VantService],
    }).compile();

    controller = module.get<VantController>(VantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
