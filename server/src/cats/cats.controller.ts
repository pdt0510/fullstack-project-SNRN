import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catServs: CatsService) {}

  @Get()
  async getAllCats() {
    const records = await this.catServs.findAll();
    console.log('records ---', records);
    return records;
  }

  @Post('createOne')
  async createACat() {
    const result = await this.catServs.createACat();
    console.log('result ---', result);
    return result;
  }
}
