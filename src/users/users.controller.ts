import { Controller, Get, Post, Req, Request, Res, Response, Body } from '@nestjs/common';
import { request } from 'express';

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
    createUser(@Body() body: any) {
        const user = body;
        return {
            id: 1,
            name: body.name,
        }
    }

    // @Post('/:id')
    // updateUser() {}

    // @Post('/:id')
    // deleteUser() {}

    // @Get('/:id')
    // getUserById() {}
}
