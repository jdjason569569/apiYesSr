
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NotificationService {

    constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {
        
      
      }

    @Cron('0 * * * * *') // Ejecutar cada minuto en punto
    handleCron() {
    console.log('tarea ejecutada');
    //this.findAll();
  }

      public async findAll(){
        const task = await this.taskRepo.find();
        console.log(task);
        
     }

   
}
