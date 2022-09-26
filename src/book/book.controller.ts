import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateBookDto from 'src/user/dto/create-books.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Post()
  create(@Body() book: CreateBookDto) {
    return this.bookService.insert(book);
  }
  @Get()
  getAll() {
    return this.bookService.getAllBooks();
  }
}
