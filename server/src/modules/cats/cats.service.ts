import { Injectable, Inject } from '@nestjs/common';
import { Cat } from '../../models/catModel';
import * as utils from '../../utils/constants';
import { ICatsService } from '../../repositories/ICatsService';

@Injectable()
export class CatsService implements ICatsService {
  constructor(
    @Inject(utils.repoNames.cats) //xx1
    private catsRepository: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.findAll<Cat>();
  }

  async createOne(): Promise<Cat> {
    return await this.catsRepository.create<Cat>({
      name: 'test name col',
      age: 333,
      breed: 'test breed col',
    });
  }
}
