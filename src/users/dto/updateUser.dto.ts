import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

class UpdateUser{

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    password: string;

}

export default UpdateUser;