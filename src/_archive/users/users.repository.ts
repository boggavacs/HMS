import { readFile, writeFile } from "node:fs/promises";
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
        const users = await readFile(this.filePath, 'utf-8');
        const usersJson = JSON.parse(users);
        const newUser: any = {}; // Declare the newUser variable
        newUser.id = Math.floor(Math.random() * 1000);
        newUser.name = user.name; // Use the 'user' parameter instead of 'newUser.name'
        usersJson.push(newUser);
        await writeFile(this.filePath, JSON.stringify(usersJson));
        return newUser;
    }
}