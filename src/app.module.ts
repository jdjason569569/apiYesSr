import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ImageModule } from './images/image.module';
import { NotificationService } from './utilityServices/notification.service';
import { Task } from './tasks/entities/task.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { MailerModule } from '@nestjs-modules/mailer';
import { TasksService } from './tasks/services/tasks.service';
require('dotenv').config()

@Module({
  imports: [ScheduleModule.forRoot(),TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432') ,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    retryDelay: 3000,
    retryAttempts: 10
  }),TasksModule, UserModule, ImageModule,TypeOrmModule.forFeature([Task]),
  MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, 
      auth: {
        user: 'jdjason569develop@gmail.com', // Aquí debes ingresar tu dirección de correo electrónico
        pass: 'cgfegbihhdrcebtw', // Aquí debes ingresar tu contraseña de correo electrónico
      },
      tls: {
        ciphers: 'SSLv3',
      },
      socketTimeout: 90000, // aumentar el tiempo de espera a 60 segundos
    },
    defaults: { 
      from: '"No Reply" <jdjason569develop@gmail.com>', // Aquí debes ingresar la dirección de correo electrónico desde la que quieres enviar los correos electrónicos
    },
  })  ],
  controllers: [],
  providers: [NotificationService, TasksService], 
})
export class AppModule {}
