import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { PactumService as PactumService } from './pactum.service';
import * as utils from '../../utils/constants';

@Controller(utils.ctrlNames.cats)
export class CatsController {
  // constructor(private catServs: PactumService) {}
  constructor(private catServs: CatsService) {}

  @Get()
  async getAllCats() {
    const records = await this.catServs.findAll();
    return records;
  }

  @Post(utils.flowNames.createOne)
  async createACat() {
    const result = await this.catServs.createOne();
    return result;
  }
}
