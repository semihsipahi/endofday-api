import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(clerkUserId: string): Promise<{
        access_token: string;
    }>;
    healthCheck(): Promise<{
        status: string;
    }>;
}
