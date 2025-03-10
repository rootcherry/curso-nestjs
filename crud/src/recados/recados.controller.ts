import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll(): string {
    return 'Esta rota retorna todos os recados';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `Esta rota retorna o recado ID ${id}`;
  }

  @Post()
  create(): string {
    return `Esta rota cria um recado.`;
  }
}
