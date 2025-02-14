import { Controller, Get, Post, Body, Param, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
    constructor(public userService: UsersService) {}

    @Get()
    listUsers() {
        try {
            return this.userService.getAllUsers();
        } catch (error) {
            throw new HttpException('Error fetching users', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('/create')
    createUser(@Body() body: CreateUserDto) {
        const user = body;
        return {
            id: 1,
            name: body.name,
            email: body.email,
            password: body.password,
        }
    }

    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return{
            id: id
        }
    }
}
