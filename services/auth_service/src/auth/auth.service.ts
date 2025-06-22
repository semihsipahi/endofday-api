import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Branch } from "../entity/branch/branch.entity";
import { User } from "../entity/users/user.entity";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Branch) private readonly branchRepo: Repository<Branch>,
    private readonly jwtService: JwtService
  ) {}

  private async validateOrCreateUser(clerkUserId: string): Promise<User> {
    let user = await this.userRepo.findOne({
      where: { clerkUserId },
      relations: ["branch"],
    });

    if (!user) {
      const defaultBranch = await this.branchRepo.findOne({
        where: {}, // tüm kayıtlar arasından ilkini alır
      });

      user = this.userRepo.create({
        clerkUserId,
        email: `${clerkUserId}@placeholder.com`,
        fullName: "Clerk User",
        role: "editor",
        branch: defaultBranch,
      });

      await this.userRepo.save(user);
    }

    return user;
  }

  async login(clerkUserId: string) {
    const user = await this.validateOrCreateUser(clerkUserId);
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      dealerId: user.branch.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
