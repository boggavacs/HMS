import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersReposiroty } from './users.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService, 
    UsersReposiroty
  ]
})
export class UsersModule {}
