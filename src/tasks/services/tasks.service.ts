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

    async findOne(id: number){
        
        const a = await this.taskRepo.find({ where: { id_users: id }});
        console.log(a);
        return a;
    }

    create(body: Task){
        body.date_register = new Date();
        const newTask = this.taskRepo.create(body);
        return this.taskRepo.save(newTask);
    }
    

    async update(id: any, body:any){
        const task = await this.taskRepo.findOne(id);
        this.taskRepo.merge(task, body);
        return this.taskRepo.save(task);
    }

    async delete(id: number){
        await this.taskRepo.delete(id);
        return true;
    }





}
