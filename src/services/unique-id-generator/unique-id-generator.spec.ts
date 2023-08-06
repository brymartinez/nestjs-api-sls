import { Test, TestingModule } from '@nestjs/testing';
import { UniqueIDGenerator } from './unique-id-generator';

describe('UniqueIDGenerator', () => {
  let service: UniqueIDGenerator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniqueIDGenerator],
    }).compile();

    service = module.get<UniqueIDGenerator>(UniqueIDGenerator);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
