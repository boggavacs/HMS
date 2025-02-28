import { Injectable } from '@nestjs/common';
import { UsersReposiroty } from './users.repository';

@Injectable()
export class UsersService {

    constructor(
        public userRepository: UsersReposiroty,
    ) { }

    getAllUsers() {
        return this.userRepository.getAllUsers();
    }

    generic<T>(name: T): T {
        return name
    }

    createUser<T>(user: T): Promise<T> {
        return this.userRepository.createUser(user);
        // this.userRepository.createUser({
        //     id: 1,
        //     name: "John Doe",
        //     email: "test@test.com",
        // });
    }

}