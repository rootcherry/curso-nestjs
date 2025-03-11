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
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    // return `Retorna todos os recados. Limit=${limit}, Offset=${offset}.`;
    return this.recadosService.hello();
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
