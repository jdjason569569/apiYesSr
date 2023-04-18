import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config({ path: '.env' });
  const app = await NestFactory.create(AppModule);
  app.enableCors({

    origin:"https://si-senor.netlify.app/",
    
    });
  await app.listen(process.env.PORT  || 3001);
}
bootstrap();
