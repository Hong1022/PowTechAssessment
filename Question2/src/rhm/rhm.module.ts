import { Module } from '@nestjs/common';
import { RhmController } from './rhm.controller';
import { RhmService } from './rhm.service';

@Module({
  controllers: [RhmController],
  providers: [RhmService],
})
export class RhmModule {}
