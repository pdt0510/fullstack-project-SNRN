import { Injectable, Inject } from '@nestjs/common';
import { Cat } from '../../models/catModel';
import * as utils from '../../utils/constants';
import { ICatsRepository } from '../../repositories/ICatsRepository';

@Injectable()
export class CatsService implements ICatsRepository {
  constructor(
    @Inject(utils.repoNames.cats)
    private catsRepository: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.findAll<Cat>();
  }

  async createOne(): Promise<Cat> {
    return await this.catsRepository.create<Cat>({
      name: 'Sequelize ORM',
      age: 333,
      breed: 'test breed col',
    });
  }
}
