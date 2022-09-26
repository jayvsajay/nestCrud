import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Register from 'src/db/Register.Entity';
import { RegisterUserController } from './register-user.controller';
import { RegisterUserService } from './register-user.service';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    TypeOrmModule.forFeature([Register]),
    MulterModule.register({
      dest: './files',
    }),
  ],
  controllers: [RegisterUserController],
  providers: [RegisterUserService],
})
export class RegisterUserModule {}
