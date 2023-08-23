import { Cat } from '../models/catModel';

export interface ICatsRepository {
  findAll: () => Promise<Cat[]>;
  createOne?: () => Promise<Cat>;
}
