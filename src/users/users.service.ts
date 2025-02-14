import { Injectable } from '@nestjs/common';
import { UsersReposiroty } from './users.repository';

@Injectable()
export class UsersService {
    
    constructor(public userRepository: UsersReposiroty) {}

    getAllUsers() {
        return this.userRepository.getAllUsers();
    }
}
