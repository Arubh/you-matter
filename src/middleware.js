import NextAuth from "next-auth"
import { authConfig } from "@/utils/auth.config"

//this file should not be inside app folder. it should be inside root folder (Src)

export default NextAuth(authConfig).auth

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next).*)"],
  };
      