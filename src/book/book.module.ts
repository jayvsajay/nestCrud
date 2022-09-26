import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import BookEntity from 'src/db/book.entity';
import GenreEntity from 'src/db/genre.entity';
import UserEntity from 'src/db/user.entity';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, UserEntity, GenreEntity])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
