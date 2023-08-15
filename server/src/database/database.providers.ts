import { Sequelize } from 'sequelize-typescript';
import { Cat } from '../cats/cat.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const defaultPort = 3306;
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: defaultPort,
        username: 'root',
        password: null,
        query: { raw: true },
        dialectOptions: {
          useUTC: false,
          dateStrings: true,
          typeCast: true,
        },
        timezone: '+07:00',
        database: 'nest', //first of all, creating a db named 'nest' for connecting to mysql via
      });
      sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
