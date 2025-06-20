import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body("clerkUserId") clerkUserId: string) {
    return this.authService.login(clerkUserId);
  }

  @Get("health-check")
  async healthCheck() {
    return { status: "OK" };
  }
}
