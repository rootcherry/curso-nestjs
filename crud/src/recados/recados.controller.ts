import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @HttpCode(HttpStatus.OK)
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
  create(@Body() body: any) {
    // console.log(body);
    return body;
  }
}
