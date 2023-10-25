import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) { }

    async findOne(id_user: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: id_user
        });
    }


    async allUsers(): Promise<any> {
        return await this.prisma.user.findMany()
    }

    async create(user: Prisma.UserCreateInput): Promise<User> {
        return await this.prisma.user.create({
            data: user,
        });
    }

    async edit(where: Prisma.UserWhereUniqueInput, user: Prisma.UserUpdateInput): Promise<User> {
        return await this.prisma.user.update({
            where: where,
            data: user
        });
    }
    async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where: where
        })
    }

}