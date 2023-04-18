import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  dotenv.config({ path: '.env' });
  const server = express();
  const app = await NestFactory.create(AppModule,
    new ExpressAdapter(server),);
  

  const corsOptions: CorsOptions = {
    origin: '*',
  };
  app.enableCors(corsOptions);
  


  await app.listen(process.env.PORT  || 3001);
}
bootstrap();
