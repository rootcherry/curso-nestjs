import { Controller, Get } from '@nestjs/common';
import { ConceitosManualServices } from './conceitos-manual.service';

@Controller('conceitos-manual')
export class ConceitosManualController {
  constructor(
    private readonly conceitosManualService: ConceitosManualServices,
  ) {}

  @Get()
  home(): string {
    return this.conceitosManualService.solucionaHome();
  }
}
