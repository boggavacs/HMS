import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ApplicationInfo } from './appModel';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../users/user.entity';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot(
      {
        type: 'sqlite',
        database: 'db.sqlite',
        entities: [User],
        synchronize: true,
      }
    ),
  ],
  providers: [ApplicationInfo],
})
export class AppModule {}
