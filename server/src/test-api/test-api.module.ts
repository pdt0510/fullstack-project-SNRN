import { Module } from '@nestjs/common';
import { TestApiService } from './test-api.service';
import { TestApiController } from './test-api.controller';

@Module({
  providers: [TestApiService],
  controllers: [TestApiController],
})
export class TestApiModule {}
