import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  Min,
  Max,
  IsNotEmpty,
} from 'class-validator';
@Entity()
export default class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @Length(5)
  mobile: number;
}
