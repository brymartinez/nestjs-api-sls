import { Module } from '@nestjs/common';
import { SSMConfigService } from './ssm-config.service';

@Module({
  exports: [SSMConfigService],
  providers: [SSMConfigService],
})
export class SSMConfigModule {}
