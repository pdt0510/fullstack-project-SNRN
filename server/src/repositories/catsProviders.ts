import { Cat } from '../models/catModel';
import * as utils from '../utils/constants';

export const catsProviders = [
  {
    provide: utils.repoNames.cats, //xx1
    useValue: Cat,
  },
];
