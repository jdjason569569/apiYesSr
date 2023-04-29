import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id_images: number;

  @Column()
  name: string;

  @Column()
  date_register: Date;

  @Column()
  id_users: number;

}