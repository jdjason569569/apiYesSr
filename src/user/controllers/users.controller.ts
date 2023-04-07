import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { users } from '../entities/users.entity';



@Controller('api/user')
export class UsersController {

    constructor(private userService: UserService){}


    @Get()
    getAll(){
        //return this.taskService.findAll();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number){
        //return this.taskService.findOne(id);
    }

    @Post()
    create(@Body() body: users){
        body.register = new Date();
      return this.userService.create(body);
    }
    

    @Put(':id')
    Update(@Param('id') id: number, @Body() body: any)
    {
        //return this.taskService.update(id, body);
    }
    

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        //return this.taskService.delete(id);
    }


}
