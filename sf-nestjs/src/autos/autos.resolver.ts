import { Resolver, Query, Args } from '@nestjs/graphql';
import { AutoService } from 'src/service/auto.service';
import { ArendaInput } from '../graphql';

@Resolver()
export class AutosResolver {
  constructor(private autoService: AutoService) {}

  @Query()
  filterAuto(@Args('arendaInput') arendaInput: ArendaInput) {
    const { startDate, endDate, type } = arendaInput;   
        return this.autoService.filterAuto(startDate, endDate, type);
  }
}
