import { Test, TestingModule } from '@nestjs/testing';
import { VantService } from './vant.service';

describe('VantService', () => {
  let service: VantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VantService],
    }).compile();

    service = module.get<VantService>(VantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
