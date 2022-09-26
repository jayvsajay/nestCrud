import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Register from 'src/db/Register.Entity';
import { Repository } from 'typeorm';

@Injectable()
export class RegisterUserService {
  constructor(
    @InjectRepository(Register)
    private registerRepository: Repository<Register>,
  ) {}
  create(Register: Register) {
    return this.registerRepository.save(Register);
  }
}
