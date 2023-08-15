import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof Cat,
  ) {}

  async findAll(): Promise<Cat[]> {
    return await this.catsRepository.findAll<Cat>();
  }

  async createACat(): Promise<Cat> {
    return await this.catsRepository.create<Cat>({
      name: 'test name col',
      age: 333,
      breed: 'test breed col',
    });
  }
}
