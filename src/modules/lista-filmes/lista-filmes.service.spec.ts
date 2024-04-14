import { Test, TestingModule } from '@nestjs/testing';
import { ListaFilmesService } from './lista-filmes.service';

describe('ListaFilmesService', () => {
  let service: ListaFilmesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaFilmesService],
    }).compile();

    service = module.get<ListaFilmesService>(ListaFilmesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
