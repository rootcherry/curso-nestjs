import { Module } from '@nestjs/common';
import { ConceitosManualController } from './conceitos-manual.controller';
import { ConceitosManualServices } from './conceitos-manual.service';

@Module({
  controllers: [ConceitosManualController],
  providers: [ConceitosManualServices],
})
export class ConceitosManualModule {}
