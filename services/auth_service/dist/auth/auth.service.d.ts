import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { Branch } from "./entities/branch/branch.entity";
import { User } from "./entities/users/user.entity";
export declare class AuthService {
    private readonly userRepo;
    private readonly branchRepo;
    private readonly jwtService;
    constructor(userRepo: Repository<User>, branchRepo: Repository<Branch>, jwtService: JwtService);
    validateOrCreateUser(clerkUserId: string): Promise<User>;
    login(clerkUserId: string): Promise<{
        access_token: string;
    }>;
}
