import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { appConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors({
    credentials: true,
    exposedHeaders: 'Content-Disposition',
    origin: appConfig.originConfig,
  });

  // Middlewares
  app.use(
    helmet({
      crossOriginEmbedderPolicy: appConfig.isProductionEnv,
      contentSecurityPolicy: appConfig.isProductionEnv,
    }),
  );

  // Pipes
  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000);
  // await app.listen(3000);
}
bootstrap();
