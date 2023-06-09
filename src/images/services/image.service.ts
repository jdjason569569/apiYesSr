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

    create(body: Images){
        body.date_register = new Date();
        const newImage = this.imagesRepo.create(body);
        return this.imagesRepo.save(newImage);
    }

    findTaskByUser(id: number){
        return this.imagesRepo.find({ where: { id_users: id }, order: { id_images: 'ASC' },});
    }

    findTaskById(idImage: number){
        return this.imagesRepo.find({ where: { id_images: idImage }});
    }

    async delete(id: number){
        await this.imagesRepo.delete(id);
        return true;
    }


}
