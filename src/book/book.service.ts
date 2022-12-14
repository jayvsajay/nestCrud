import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BookEntity from 'src/db/book.entity';
import GenreEntity from 'src/db/genre.entity';
import UserEntity from 'src/db/user.entity';
import CreateBookDto from 'src/user/dto/create-books.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private bookRepository: Repository<BookEntity>,
  ) {}

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name, userID, genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne({ where: { id: userID } });
    book.genres = [];
    for (let i = 0; i < genreIDs.length; i++) {
      const genre = await GenreEntity.findOne({ where: { id: genreIDs[i] } });
      book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  async getAllBooks(): Promise<BookEntity[]> {
    const user: UserEntity = await UserEntity.findOne({
      where: { id: 2 },
      relations: ['books'],
    });
    return BookEntity.find();
  }
}
