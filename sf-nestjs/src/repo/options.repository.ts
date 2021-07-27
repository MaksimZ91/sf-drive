import { Injectable } from '@nestjs/common';
import { OptionsAuto } from '../entites/options.entity';
import { getRepository } from 'typeorm';

Injectable();
export class OptionsRepository {
  async SaveOptions(options: OptionsAuto) {
    const repository = getRepository(OptionsAuto);
    return await repository.save(options);
  }
}
