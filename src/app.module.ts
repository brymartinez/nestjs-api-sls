import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SSMConfigService } from './infrastructure/ssm-config/ssm-config.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SSMConfigService],
})
export class AppModule {}
