import { Injectable, Inject } from '@nestjs/common';
import { Cat } from '../../models/catModel';
import * as utils from '../../utils/constants';
import { ICatsRepository } from '../../repositories/ICatsRepository';

@Injectable()
export class PactumService implements ICatsRepository {
  constructor(
    @Inject(utils.repoNames.cats)
    private pactumRepo: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return await this.pactumRepo.findAll<Cat>();
  }

  async createOne(): Promise<Cat> {
    return await this.pactumRepo.create<Cat>({
      name: 'Pactumjs ORM',
      age: 555234,
      breed: 'Pactumjs col',
    });
  }
}
