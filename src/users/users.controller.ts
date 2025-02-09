import { Post, Controller, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Post('/signup')
    createuser(@Body() body: CreateUserDto) {
        this.usersService.create(body.email, body.password)
    }

}
