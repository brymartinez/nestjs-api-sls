import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SSMConfigService } from './infrastructure/ssm-config/ssm-config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { SSMConfigModule } from './infrastructure/ssm-config/ssm-config.module';
import { UniqueIDGenerator } from './services/unique-id-generator/unique-id-generator';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SSMConfigModule,
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
      imports: [ConfigModule, SSMConfigModule],
    }),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [AppController],
  providers: [UniqueIDGenerator],
})
export class AppModule {}
