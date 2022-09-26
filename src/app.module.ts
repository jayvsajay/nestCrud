import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/employee.entity';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { GenreModule } from './genre/genre.module';
import UserEntity from './db/user.entity';
import BookEntity from './db/book.entity';
import GenreEntity from './db/genre.entity';
@Module({
  imports: [
    EmployeeModule,
    UserModule,
    BookModule,
    GenreModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'typescriptuser',
      entities: [Employee, UserEntity, BookEntity, GenreEntity],
      synchronize: true,
    }),
    UserModule,
    BookModule,
    GenreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
