import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOrderDTO } from './dto/create-config.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';

@Controller('v1')
export class AppController {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() body: CreateOrderDTO) {
    return {};
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
