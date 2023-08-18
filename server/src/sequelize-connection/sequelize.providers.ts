import { Sequelize } from 'sequelize-typescript';
import { Cat } from '../models/catModel';
import * as constVals from '../utils';

export const databaseProviders = [
  {
    provide: constVals.dbVals.sequelize,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: null,
        query: { raw: true },
        dialectOptions: {
          useUTC: false,
          dateStrings: true,
          typeCast: true,
        },
        timezone: '+07:00',
        database: constVals.dbVals.dbName,
      });
      sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
