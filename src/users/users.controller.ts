import { Controller, Get, Post, Body } from '@nestjs/common';
import userDto from './dto/user.dto';

@Controller('users')
export class UsersController {

    @Post('/Signup')
    create(@Body() body: userDto) {
        return 'This action adds a new user';
    }

}
