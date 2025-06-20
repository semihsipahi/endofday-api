import { Branch } from "../branch/branch.entity";
export declare class User {
    id: string;
    clerkUserId: string;
    email: string;
    fullName: string;
    role: string;
    branch: Branch;
}
