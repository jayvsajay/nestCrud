import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BookEntity from 'src/db/book.entity';
import UserEntity from 'src/db/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  create(user: UserEntity) {
    return this.userRepository.save(user);
  }

  async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    console.log(typeof userID);
    const user: UserEntity = await UserEntity.findOne({
      where: { id: userID },
      relations: ['books'],
    });
    return user.books;
  }
}
