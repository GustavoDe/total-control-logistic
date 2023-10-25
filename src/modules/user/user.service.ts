import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserRepository } from '../../repositories/user.repository';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) { }

    async findUserById(id_user: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return this.userRepository.findOne(id_user);
    }

    async findAllUsers(): Promise<User[]> {
        return this.userRepository.allUsers();
    }

    async createUser(user: Prisma.UserCreateInput): Promise<User> {
        return this.userRepository.create(user);
    }

    async updateUser(where: Prisma.UserWhereUniqueInput, user: Prisma.UserUpdateInput): Promise<User> {
        return this.userRepository.edit(where, user);
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.userRepository.delete(where);
    }
}
