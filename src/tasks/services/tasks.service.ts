import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Task) private taskRepo: Repository<Task>){}

    findAll(){
       return this.taskRepo.find();
    }

     async findTaskById(id: number){
        return await this.taskRepo.find({ where: { id_task: id }});
    }

     findTaskByUser(id: number){
        return this.taskRepo.find({ where: { id_users: id }});
    }

    create(body: Task){
        body.date_register = new Date();
        const newTask = this.taskRepo.create(body);
        return this.taskRepo.save(newTask);
    }
    

    async update(id: any, body:any){
        const [task] = await this.findTaskById(id);
        this.taskRepo.merge(task, body);
        return this.taskRepo.save(task);
    }

    async delete(id: number){
        await this.taskRepo.delete(id);
        return true;
    }





}
