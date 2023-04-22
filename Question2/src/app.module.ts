import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RhmModule } from './rhm/rhm.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './config/env.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      validationSchema: envSchema,
    }),
    RhmModule,
    RhmModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
