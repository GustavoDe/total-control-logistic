import { UserType } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";

export class UserCreateDto {
  @IsNotEmpty({ message: 'O campo nome não pode estar vazio' })
  name: string;

  @IsNotEmpty({ message: 'O campo email não pode estar vazio' })
  @IsEmail({}, { message: 'O email fornecido não é válido' })
  email: string;

  @IsNotEmpty({ message: 'O campo tipo de usuário não pode estar vazio' })
  @IsEnum(UserType, { message: 'O tipo de usuário fornecido não é válido' })
  type_user: UserType;
}
