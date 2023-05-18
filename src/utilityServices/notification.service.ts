
import { Injectable, Inject  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';
import { MailerService } from '@nestjs-modules/mailer';
import { users } from 'src/user/entities/users.entity';

@Injectable()
export class NotificationService {

    constructor(@InjectRepository(Task) private taskRepo: Repository<Task>, private readonly mailerService: MailerService) {}

    @Cron('0 0 0 * * *') // Ejecutar cada dia
    handleCron() {
    this.manageNotifications();
  }

      private async manageNotifications(){
        const taskAndUser = await this.taskRepo.createQueryBuilder('task')
        .innerJoinAndSelect(users, 'users', 'users.id_users = task.id_users')  
        .where('task.completed = :value', { value: false }) 
        .getRawMany(); 
 
               const currentDay = new Date('2023-06-17');   
               const tasksNotify = taskAndUser.filter(task =>{
               const days = task.task_expiration_date.getTime() - currentDay.getTime();
               const missingDays = Math.floor(days / (1000 * 60 * 60 * 24));
               return missingDays <= 1; 
             });
             if(tasksNotify.length > 0){
              this.sendEmail(tasksNotify);
             }
     }

     public sendEmail(tasksNotify): void {
      console.log('Tarea de envio de emails ejecutada');
      
      const emails = tasksNotify.map(task => task.users_email);
      const uniqueEmails = emails.filter((value, index) => emails.indexOf(value) !== index);
      
       this.mailerService.sendMail({
        to: uniqueEmails.join(','),
        from: 'jdjason569develop@gmail.com',
        subject: 'Si señor',
        text: 'Si señor tienes tareas pendientes',
      });
    }

    

     

   
}
