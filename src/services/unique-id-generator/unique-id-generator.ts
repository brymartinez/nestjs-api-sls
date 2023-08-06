import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UniqueIDGenerator {
  constructor(
    @Inject('DynamoDBClient') private readonly client: DynamoDBClient,
  ) {}

  public createId(exchange: string) {
    return '10000001';
  }
}
