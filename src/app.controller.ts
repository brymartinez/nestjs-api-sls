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
import { CreateOrderDTO } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';
import { UpdateOrderDTO } from './dto/update-order.dto';
import { UniqueIDGenerator } from './services/unique-id-generator/unique-id-generator';

@Controller('v1')
export class AppController {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly uniqueIdGenerator: UniqueIDGenerator,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() body: CreateOrderDTO) {
    const id = this.uniqueIdGenerator.createId(body.exchange);
    return this.orderRepository.save({ ...body, id });
  }

  @Get()
  async get(@Param() id: string) {
    return this.orderRepository.findOneBy({ id });
  }

  @Patch()
  @UsePipes(ValidationPipe)
  async update(@Body() body: UpdateOrderDTO) {
    const order = await this.orderRepository.findBy({ id: body.id });
    return this.orderRepository.save(order);
  }

  @Delete()
  async delete(@Param() id: string) {
    return this.orderRepository.delete({ id });
  }
}
