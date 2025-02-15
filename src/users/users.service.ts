import { Injectable } from '@nestjs/common';
import { UsersReposiroty } from './users.repository';

@Injectable()
export class UsersService {

    constructor(public userRepository: UsersReposiroty) { }

    getAllUsers() {
        return this.userRepository.getAllUsers();
    }

    generic<T>(name: T): T {
        return name
    }

    getApplicationInfo<T>(ApplicationInfo: T): T {
        return ApplicationInfo
    }

}
