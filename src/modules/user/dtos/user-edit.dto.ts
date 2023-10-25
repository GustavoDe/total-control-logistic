import { UserType } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class UserEditDto {
  @IsNotEmpty({ message: 'O campo nome não pode estar vazio' })
  name: string;

  @IsOptional()
  @IsEnum(UserType, { message: 'O tipo de usuário fornecido não é válido' })
  type_user: UserType;
}
