import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';

@Controller('api/tasks')
export class TasksController {

    constructor(private taskService: TasksService){}


    @Get()
    getAll(){
        return this.taskService.findAll();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number){
        return this.taskService.findTaskByUser(id);
    }

    @Post()
    create(@Body() body: any){
      return this.taskService.create(body);
    }
    

    @Put(':id')
    Update(@Param('id') id: number, @Body() body: any)
    {
        return this.taskService.update(id, body);
    }
    

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.taskService.delete(id);
    }


}
