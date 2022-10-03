import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  /*app.enableCors({
    origin: 'http://localhost:3000', // Add domain here
    credentials: true,
  });*/
  app.enableCors();
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  const options = new DocumentBuilder()
  //.addBearerAuth()
  .setTitle('GameBox-API')
  .setDescription('GameBox application')
  .setVersion('0.1')
  .build();


  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(+process.env.APP_PORT || 3001);
}
bootstrap();
