import { Injectable, Inject } from '@nestjs/common';
import { Cat } from '../../models/catModel';
import * as utils from '../../utils/constants';
import { ICatsService } from '../../repositories/ICatsService';

//xx2
@Injectable()
export class PactumjsOrmService implements ICatsService {
  constructor(
    @Inject(utils.repoNames.cats)
    private catsRepo: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return await this.catsRepo.findAll<Cat>();
  }

  async createOne(): Promise<Cat> {
    return await this.catsRepo.create<Cat>({
      name: 'Pactumjs service one', //xx2
      age: 888,
      breed: 'Pactumjs col',
    });
  }
}
