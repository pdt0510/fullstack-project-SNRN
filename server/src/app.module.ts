import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './modules/cats/cats.module';
import { SequelizeModule } from './sequelize-connection/sequelize.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CatsModule,
    SequelizeModule,
  ],
  providers: [],
})
export class AppModule {}
