import { Get, Injectable } from '@nestjs/common';
import { TestApiController } from './test-api.controller';

@Injectable()
export class TestApiService {
  testApiNestjs() {
    return { message: 'Nestjs API displayed' };
  }

  testApiNestjs2() {
    return { message: 'is checked' };
  }
}
