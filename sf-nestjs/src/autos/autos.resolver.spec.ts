import { Test, TestingModule } from '@nestjs/testing';
import { AutosResolver } from './autos.resolver';

describe('AutosResolver', () => {
  let resolver: AutosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutosResolver],
    }).compile();

    resolver = module.get<AutosResolver>(AutosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
