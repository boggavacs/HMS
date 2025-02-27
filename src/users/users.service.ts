import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import User from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }

    async create(user: User) {
        const newUser = this.usersRepository.create(user);
        return await this.usersRepository.save(newUser);
    }

    async findAll() {
        return await this.usersRepository.find();
    }

    async findOne(id: number) {
        return await this.usersRepository.findOneBy({ id });
    }

    async updateUser(id:number, user: Partial<User>) {
        const userToUpdate = await this.usersRepository.findOneBy({ id });
        if (!userToUpdate) {
            throw new Error('User not found');
        }
        return await this.usersRepository.save(Object.assign(userToUpdate, user));
    }
}
