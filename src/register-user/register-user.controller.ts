import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Console } from 'node:console';
import Register from 'src/db/Register.Entity';
import { RegisterUserService } from './register-user.service';
import { Sampledto } from './sample.dto';

@Controller('register-user')
export class RegisterUserController {
  constructor(private registerService: RegisterUserService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@Body() body: Sampledto, @UploadedFile() file: Express.Multer.File) {
    console.log(body);
  }
}
