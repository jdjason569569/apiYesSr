import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Images } from './entities/images.entity';
import { ImageService } from './services/image.service';
import { ImageController } from './controllers/images.controller';
@Module({
    imports: [
        TypeOrmModule.forFeature([Images])  
      ],
      providers: [ImageService],
      controllers: [ImageController]
})
export class ImageModule {}
