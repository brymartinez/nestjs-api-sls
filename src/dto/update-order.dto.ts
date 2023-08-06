import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class UpdateOrderDTO {
  @IsNumberString()
  id: string;
  @IsString()
  @IsOptional()
  type?: string;
  @IsString()
  @IsOptional()
  price?: string;
  @IsString()
  @IsOptional()
  side: 'BUY' | 'SELL';
  @IsString()
  @IsOptional()
  ticker: string;
  @IsNumberString()
  @IsOptional()
  quantity: string;
}
