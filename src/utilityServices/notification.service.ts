
import { Injectable, Inject  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/entities/task.entity';
import { Repository } from 'typeorm';
import { Cron } from '@nestjs/schedule';
import { MailerService } from '@nestjs-modules/mailer';
import { users } from 'src/user/entities/users.entity';

@Injectable()
export class NotificationService {

    constructor(@InjectRepository(Task) private taskRepo: Repository<Task>, private readonly mailerService: MailerService) {
      this.manageNotifications();
      
    }

    @Cron('0 * * * * *') // Ejecutar cada minuto en punto
    handleCron() {
    //this.manageNotifications();
  }

      private async manageNotifications(){
        const taskAndUser = await this.taskRepo.createQueryBuilder('Task')
        .innerJoinAndSelect(users, 'users', 'users.id_users = Task.id_users')
        .getMany();
 
            const currentDay = new Date('2023-06-16');   
            const tasksNotify = taskAndUser.filter(task =>{
              const days = task.expiration_date.getTime() - currentDay.getTime();
              const missingDays = Math.floor(days / (1000 * 60 * 60 * 24));
              return missingDays <= 1;
            });
            console.log(tasksNotify); 
           
        //this.sendEmail(tasksNotify);
        
        
         
     }

     sendEmail(tasksNotify): void {
       this.mailerService.sendMail({
        to: 'jdjason569develop@gmail.com',
        from: 'jdjason569develop@gmail.com',
        subject: 'Prueba de correo electrónico',
        text: 'holamundo',
      });
    }

    

     

   
}
