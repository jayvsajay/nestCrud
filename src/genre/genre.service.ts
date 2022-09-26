import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import GenreEntity from 'src/db/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private genreRepository: Repository<GenreEntity>,
  ) {}

  async create(Genre: GenreEntity) {
    return this.genreRepository.save(Genre);
  }
  async getAllGenre(): Promise<GenreEntity[]> {
    return await GenreEntity.find();
  }
}
