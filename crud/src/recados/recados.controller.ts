import { Controller, Get, Param } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll(): string {
    return 'Esta rota retorna todos os recados';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Esta rota retorna um #${id} recado`;
  }
}
