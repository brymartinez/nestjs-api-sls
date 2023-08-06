import { IsNumberString, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsString()
  type: 'LIMIT' | 'MARKET';
  @IsString()
  price?: string;
  @IsString()
  side: 'BUY' | 'SELL';
  @IsString()
  ticker: string;
  @IsNumberString()
  quantity: string;
  @IsString()
  exchange: string;
}
