import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestApiModule } from './test-api/test-api.module';
import { CatsModule } from './cats/cats.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TestApiModule,
    CatsModule,
    DatabaseModule,
  ],
  providers: [],
})
export class AppModule {}
