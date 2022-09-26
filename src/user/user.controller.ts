import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import UserEntity from 'src/db/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() body: UserEntity) {
    return this.userService.create(body);
  }

  @Get('books')
  getBooks(@Body('userID', ParseIntPipe) userID: number) {
    return this.userService.getBooksOfUser(userID);
  }
}
