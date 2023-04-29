import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ImageService } from '../services/image.service';


@Controller('api/images')
export class ImageController {

    constructor(private imageService: ImageService) { }


    @Get()
    getAll() {
        return this.imageService.findAll();
    }

    @Post()
    create(@Body() body: any) {
        return this.imageService.create(body);
    }


}
