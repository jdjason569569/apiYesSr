import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Images } from '../entities/images.entity';


@Injectable()
export class ImageService {

    constructor(@InjectRepository(Images) private imagesRepo: Repository<Images>){}

    findAll(){
       return this.imagesRepo.find();
    }

}
