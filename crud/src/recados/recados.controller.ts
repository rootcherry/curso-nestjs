import { Controller, Get, Param } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll(): string {
    return 'Esta rota retorna todos os recados';
  }

  @Get(':id')
  findOne(): string {
    return `Esta rota retorna um recado`;
  }
}
