import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [AppController],
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
