import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SSMConfigService } from './infrastructure/ssm-config/ssm-config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: async (
        config: ConfigService,
        ssmConfig: SSMConfigService,
      ) => {
        await ssmConfig.load();
        return {
          type: 'postgres',
          url: config.get<string>('DB_CONNSTRING'),
          autoLoadEntities: true,
          synchronize: true,
        };
      },
      inject: [ConfigService, SSMConfigService],
    }),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [AppController],
  providers: [SSMConfigService],
})
export class AppModule {}
