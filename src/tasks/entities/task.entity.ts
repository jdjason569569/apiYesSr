import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id_task: number;

  @Column()
  name: string;

  @Column({default: false})
  completed: boolean;

  @Column()
  date_register: Date;

  @Column()
  expiration_date: Date;

  @Column()
  id_users: number;
  

}