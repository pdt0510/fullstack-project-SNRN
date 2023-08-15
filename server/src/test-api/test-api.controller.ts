import { Controller, Get } from '@nestjs/common';
import { TestApiService } from './test-api.service';

@Controller()
export class TestApiController {
  constructor(private servs: TestApiService) {}

  @Get()
  testApiNestjs(): {} {
    return this.servs.testApiNestjs();
  }

  @Get('check')
  testApiNestjs2(): {} {
    return this.servs.testApiNestjs2();
  }
}
