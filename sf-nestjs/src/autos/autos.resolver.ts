import { Body } from '@nestjs/common';
import { Resolver, Query, Args  } from '@nestjs/graphql';
import { AutoService } from 'src/service/auto.service';
import { AutoDataDto } from '../dto/autoData.dto'


@Resolver()
export class AutosResolver {
    constructor (private readonly  autoService:AutoService){}
    @Query()
    filterAuto(@Args('AutoData') AutoData: AutoDataDto) {
        return this.autoService.filterAuto(AutoData);
      }
}
