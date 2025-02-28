import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ApplicationInfo } from './appModel';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../users/user.entity';
import { Reports } from 'src/reports/reports.entity';
import { UsersModule } from 'src/users/users.module';
import { ReportsModule } from 'src/reports/reports.module';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot(
      {
        type: 'sqlite',
        database: './db.sqlite',
        entities: [User, Reports],
        synchronize: true,
      }
    ),
    UsersModule,
    ReportsModule
  ],
  providers: [ApplicationInfo],
})
export class AppModule {}