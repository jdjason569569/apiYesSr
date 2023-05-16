
import { Injectable, Inject  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NotificationService {

    constructor(@InjectRepository(Task) private taskRepo: Repository<Task>, private readonly mailerService: MailerService) {
      this.manageNotifications();
    }

    @Cron('0 * * * * *') // Ejecutar cada minuto en punto
    handleCron() {
   // this.manageNotifications();
  }

      private async manageNotifications(){
        // const tasks = await this.taskRepo.find();
        // const currentDay = new Date('2023-06-14'); 
          
        //   const tasksNotify = tasks.filter(task =>{
        //     const days = task.expiration_date.getTime() - currentDay.getTime();
        //     const missingDays = Math.floor(days / (1000 * 60 * 60 * 24));
        //     console.log('missingDays ->',missingDays);
        //     return missingDays <= 1;
        //   });
        const a = await this.sendEmail();
          
     }

     async sendEmail(): Promise<void> {
      return await this.mailerService.sendMail({
        to: 'jdjason569@gmail.com',
        subject: 'Prueba de correo electrónico',
        text: 'holamundo',
      });
    }

    

     

   
}
