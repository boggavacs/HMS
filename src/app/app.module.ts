import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot(), 
    UsersModule
  ],
})
export class AppModule {}
