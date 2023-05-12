import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ImageModule } from './images/image.module';
import { NotificationService } from './utilityServices/notification.service';
import { Task } from './tasks/entities/task.entity';
import { ScheduleModule } from '@nestjs/schedule';
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
  }),TasksModule, UserModule, ImageModule,TypeOrmModule.forFeature([Task])  ],
  controllers: [],
  providers: [NotificationService],
})
export class AppModule {}
