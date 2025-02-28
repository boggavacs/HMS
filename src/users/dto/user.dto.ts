import { IsString, IsEmail, IsNotEmpty,  } from 'class-validator';
import exp from 'constants';

class userDto {

    @IsNotEmpty()
    id: number;

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