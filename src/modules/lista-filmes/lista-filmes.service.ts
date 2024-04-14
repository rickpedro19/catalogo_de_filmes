import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movies } from './entity/movies.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { moviesDTO } from './dto/movies.dto';

@Injectable()
export class ListaFilmesService {
    constructor( 
        @InjectRepository(Movies)
        private moviesRepository: Repository<Movies>
    ){}

    async createMovie(movies: moviesDTO){
        const createMovie =  await this.moviesRepository.create({
            titulo: movies.titulo,
            diretor: movies.diretor,
            anoLançamento: movies.anoLançamento,
            genero: movies.genero,
        })
        return await this.moviesRepository.save(createMovie)
    }

    async findMovies(){
        return await this.moviesRepository.find()
    }

    async findOneMovie(titulo: string){
        return await this.moviesRepository.findOneBy({
            titulo: titulo,
        })
    }

    async updateMovie(movies: moviesDTO){
        return await this.moviesRepository.update(movies.id, {
            titulo: movies.titulo,
            diretor: movies.diretor,
            anoLançamento: movies.anoLançamento,
            genero: movies.genero,
        })
    }

    async deleteMovie(id: number) {
        const movie = await this.moviesRepository.delete(id)
    }
}
