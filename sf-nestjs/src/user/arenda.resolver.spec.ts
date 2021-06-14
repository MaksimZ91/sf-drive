import { Test, TestingModule } from '@nestjs/testing';
import { ArendaResolver } from './arenda.resolver';

describe('ArendaResolver', () => {
  let resolver: ArendaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArendaResolver],
    }).compile();

    resolver = module.get<ArendaResolver>(ArendaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
