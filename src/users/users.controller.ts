import { Controller, Get, Post, Body, HttpException } from '@nestjs/common';
import userDto from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ) {}

    @Post('/Signup')
    create(@Body() body: userDto) {
        try {
            return this.usersService.create(body);
            // return {
            //     message: 'User created successfully',
            //     data: body
            // };
        } catch (error) {
            throw new HttpException({
                status: 500,
                error: 'Error creating user',
            }, 500);
        }
    }

}
