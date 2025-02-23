import { Controller, Get, Post, Body, Param, HttpException } from '@nestjs/common';
import userDto from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ) {}

    // Create a new user in the database
    @Post('/Signup')
    create(@Body() body: userDto) {
        try {
            return this.usersService.create(body);
        } catch (error) {
            throw new HttpException({
                status: 500,
                error: 'Error creating user',
            }, 500);
        }
    }

    // Get all users from the database
    @Get()
    findAll() {
        try {
            return this.usersService.findAll();
        } catch (error) {
            throw new HttpException({
                status: 500,
                error: 'Error getting users',
            }, 500);
        }
    }

    // Get a single user by ID
    @Get('/:id')
    findOne(@Param('id') id: string) {
        try {
            return this.usersService.findOne(Number(id));
        } catch (error) {
            throw new HttpException({
            status: 500,
            error: 'Error getting user',
            }, 500);
        }
    }

}
