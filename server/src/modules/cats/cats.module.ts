import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { catsProviders } from '../../repositories/catsProviders';
import { CatsController } from './cats.controller';
import { PactumjsOrmService } from './cats.PactumjsOrmService';

@Module({
  controllers: [CatsController],
  providers: [CatsService, PactumjsOrmService, ...catsProviders], //xx2
})
export class CatsModule {}
