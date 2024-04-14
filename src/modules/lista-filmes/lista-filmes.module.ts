import { Module } from '@nestjs/common';
import { ListaFilmesService } from './lista-filmes.service';
import { ListaFilmesController } from './lista-filmes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './entity/movies.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movies]), AuthModule],
  controllers: [ListaFilmesController],
  providers: [ListaFilmesService],
})
export class ListaFilmesModule {}
