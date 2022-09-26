import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Register {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  mobile: number;

  @Column()
  path: string;
}
