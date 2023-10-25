import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dtos/user-create.dto';
import { UserEditDto } from './dtos/user-edit.dto';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService) { }
    @Get('users')
    async getUsers() {
        return await this.UserService.findAllUsers()
    }

    @Post()
    async createUser(
        @Body() body: UserCreateDto
    ) {
        return await this.UserService.createUser(body)
    }

    @Get(':id_user')
    async clientByID(@Param('id_user', new ParseIntPipe()) id_user) {
        return await this.UserService.findUserById({ id: id_user })
    }

    @Put(':id_user/edit')
    async editClient(@Body() body: UserEditDto, @Param('id_user', new ParseIntPipe()) id_user) {
        return await this.UserService.updateUser({ id: id_user }, body)

    }
    @Delete(':id_user')
    async deleteClient(@Param('id_user', new ParseIntPipe()) id_user) {
        return await this.UserService.deleteUser({ id: id_user })

    }
}
