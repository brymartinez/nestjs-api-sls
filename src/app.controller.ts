import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderDTO } from './dto/create-config.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async create(@Body() body: CreateOrderDTO) {
    return;
  }

  @Get()
  async get(@Param() id: string) {
    return;
  }

  @Patch()
  async update(@Body() body: any) {
    return;
  }

  @Delete()
  async delete(@Param() id: string) {
    return;
  }
}
