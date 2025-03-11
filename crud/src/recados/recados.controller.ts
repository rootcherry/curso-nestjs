import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Esta rota apaga o recado ID ${id}`;
  }
}
