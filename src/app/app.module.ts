import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { ApplicationInfo } from './appModel';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot(), 
    UsersModule
  ],
  providers: [ApplicationInfo],
})
export class AppModule {}
