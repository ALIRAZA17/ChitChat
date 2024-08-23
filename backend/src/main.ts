import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //this global pipe is responsible for automatically validating incoming request data against the defined DTOs. The ValidationPipe takes care of validating the request body and ensuring it conforms to the rules defined by the class-validator decorators.
  app.useGlobalPipes(new ValidationPipe({whitelist: true}));
  await app.listen(3001);
}
bootstrap();
