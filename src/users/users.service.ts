import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import  User  from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) {}

    create(user: User) {
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }
}
