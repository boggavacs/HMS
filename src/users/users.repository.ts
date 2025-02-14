import { readFile } from "node:fs/promises";
import { join } from "path";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class UsersReposiroty {
    
    private filePath: string;
    
    constructor() {
        this.filePath = join(__dirname, 'users.json');
    }

    async getAllUsers() {
        const users = await readFile(this.filePath, 'utf-8');
        const usersJson = JSON.parse(users);
        return usersJson;
    }     
    
    async getUserById(id: string) {
        console.log('getUserById');
    }

    async createUser(user: any) {
        console.log('createUser');
    }
}