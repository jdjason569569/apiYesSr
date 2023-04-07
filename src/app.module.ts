import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: 'my_db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    retryDelay: 3000,
    retryAttempts: 10
  }),TasksModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
