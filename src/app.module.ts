import { Module } from '@nestjs/common';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
