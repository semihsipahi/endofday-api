import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { BranchModule } from "./auth/entities/branch/branch.module";
import { UserModule } from "./auth/entities/users/user.module";
import { configService } from "./config/config.service";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    AuthModule,
    UserModule,
    BranchModule,
  ],
})
export class AppModule {}
