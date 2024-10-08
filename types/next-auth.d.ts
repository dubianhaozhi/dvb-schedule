import { User } from "next-auth";
import { JWT } from "next-auth/jwt";

type UserId = string;
type UserRole = "PARENT" | "STAFF" | "SUPER_STAFF";

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    role: UserRole;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      role: UserRole;
    };
  }
}
