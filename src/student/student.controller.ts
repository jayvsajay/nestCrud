import { Body, Controller, Post } from '@nestjs/common';
import Student from 'src/db/student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post()
  async create(@Body() body: Student) {
    return this.studentService.create(body);
  }
}
