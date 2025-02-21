import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import exp from 'constants';

class userDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}

export default userDto;