import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaFilmesModule } from './modules/lista-filmes/lista-filmes.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './modules/lista-filmes/entity/movies.entity';
import { User } from './auth/entity/user.entity';

@Module({
  imports: [
    ListaFilmesModule, 
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'movies',
      password: 'movies123',
      database: 'moviesDatabase',
      entities: [Movies, User],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
