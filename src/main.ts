import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: '127.0.0.1',
      port: 6379,
      password: 'mls123',
    },
  })

  const config = new DocumentBuilder()
  .setTitle('Filmes')
  .setDescription('Catalogo de filmes')
  .setVersion('1.0')
  .addTag('Lista de Filmes')
  .addSecurity('bearer', {
    type: 'http',
    scheme: 'bearer',
  })
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

app.startAllMicroservices()

await app.listen(3000);
console.log('http://127.0.0.1:3000/api')
}
bootstrap();
