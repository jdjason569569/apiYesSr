
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NotificationService {

    constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

    @Cron('0 * * * * *') // Ejecutar cada minuto en punto
    handleCron() {
    this.findAll();
  }

      public async findAll(){
        const tasks = await this.taskRepo.find();
        
        
        const month = new Date(); 
        
        const numberMonth = month.getMonth() + 1;
          const deadline = new Date(month.getFullYear(), numberMonth, 1); //fecha limite cada mes
          
          tasks.forEach(task =>{
            const days = deadline.getTime() - task.date_register.getTime();
            const diasFaltantes = Math.ceil(days / (1000 * 60 * 60 * 24));
            console.log('diasFaltantes', diasFaltantes);
          })
        
        
        
     }

   
}
