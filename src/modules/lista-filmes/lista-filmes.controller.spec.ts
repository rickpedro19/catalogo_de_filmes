import { Test, TestingModule } from '@nestjs/testing';
import { ListaFilmesController } from './lista-filmes.controller';
import { ListaFilmesService } from './lista-filmes.service';

describe('ListaFilmesController', () => {
  let controller: ListaFilmesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaFilmesController],
      providers: [ListaFilmesService],
    }).compile();

    controller = module.get<ListaFilmesController>(ListaFilmesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
