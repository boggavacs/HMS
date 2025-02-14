import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UsersController {

    @Get()
    listUsers() {
        return [
            {
                id: 1,
                name: 'John Doe',
            },
        ]
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

    // @Post('/:id')
    // updateUser() {}

    // @Post('/:id')
    // deleteUser() {}

    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return{
            id: id
        }
    }
}
