import { Body, Controller, Get, Post } from '@nestjs/common';
import GenreEntity from 'src/db/genre.entity';
import { GenreService } from './genre.service';

@Controller('genre')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Post()
  create(@Body() body: GenreEntity) {
    return this.genreService.create(body);
  }
  @Get()
  getAll() {
    return this.genreService.getAllGenre();
  }
}
