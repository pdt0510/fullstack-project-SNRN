import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { PactumService } from './pactum.service';
import { Cat } from './../../models/catModel';
import * as utils from '../../utils/index';

const catsProviders = [
  {
    provide: utils.repoNames.cats,
    useValue: Cat,
  },
];

@Module({
  controllers: [CatsController],
  providers: [CatsService, PactumService, ...catsProviders],
})
export class CatsModule {}
