import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  create(Employee: Employee) {
    return this.employeeRepository.save(Employee);
  }

  findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOneBy({ id });
  }

  async destroy(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }

  update(id: number, body: Employee) {
    return this.employeeRepository.update(id, body);
  }
}
