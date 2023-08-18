import { Cat } from '../models/catModel';

// xx2
export interface ICatsService {
  findAll: () => Promise<Cat[]>;
  createOne?: () => Promise<Cat>;
}
