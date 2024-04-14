import { Body, Controller, UseGuards, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ListaFilmesService } from './lista-filmes.service';
import { moviesDTO } from './dto/movies.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('lista-filmes')
export class ListaFilmesController {
  constructor(private readonly listaFilmesService: ListaFilmesService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post('/create')
  async create(@Body() movies: moviesDTO){
    return this.listaFilmesService.createMovie(movies)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('/find')
  async find(){
    return await this.listaFilmesService.findMovies()
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('/findOne/:titulo')
  async findOne(@Param('titulo') titulo: string){
    return await this.listaFilmesService.findOneMovie(titulo)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch('/Update')
  async update(@Body() movies: moviesDTO){
    return await this.listaFilmesService.updateMovie(movies)
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete('/Delete/:id')
  async delete(@Param('id') id: number){
    return await this.listaFilmesService.deleteMovie(id)
  }
}
