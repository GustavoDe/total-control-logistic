import { UserRepository } from "../../repositories/user.repository";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaService } from "../../database/prisma.service";
import { Prisma } from "@prisma/client";

describe('User Controller', () => {
  let userController: UserController;
  let userService: UserService;
  let userRepository: UserRepository;
  let prismaService: PrismaService;

  beforeEach(() => {
    prismaService = new PrismaService()
    userRepository = new UserRepository(prismaService);
    userService = new UserService(userRepository);
    userController = new UserController(userService);
  });

  describe('Listagem de Usuários', () => {
    it('Deve retornar um array com todos usuários existentes na base', async () => {
      const result: any = ['test'];
      jest.spyOn(userService, 'findAllUsers').mockImplementation(() => result);
      expect(await userController.getUsers()).toBe(result);
    });
  });

  

  it('Deve retornar um objeto de usuário de acordo com o id informado', async () => {
    const userIdExist: Prisma.UserWhereUniqueInput = { id: 1 };
    const user = await userService.findUserById(userIdExist);
    console.log(user)
    expect(user).not.toBeNull();
    expect(user?.id).toBe(userIdExist.id);
  });


});
