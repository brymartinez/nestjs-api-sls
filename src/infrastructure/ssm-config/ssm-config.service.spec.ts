import { Test, TestingModule } from '@nestjs/testing';
import { SSMConfigService } from './ssm-config.service';

describe('SSMConfigService', () => {
  let service: SSMConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SSMConfigService],
    }).compile();

    service = module.get<SSMConfigService>(SSMConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
