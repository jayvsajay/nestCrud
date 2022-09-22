import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Post()
  async create(@Body() body: Employee) {
    return this.employeeService.create(body);
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Employee> {
    return this.employeeService.findOne(params.id);
  }

  @Put(':id')
  async update(@Param() params, @Body() body: Employee) {
    return this.employeeService.update(params.id, body);
  }

  @Delete(':id')
  async remove(@Param() params) {
    return this.employeeService.destroy(params.id);
  }
}
