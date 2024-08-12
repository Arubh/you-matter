import NextAuth from "next-auth";
import { User } from "@/utils/models/User";
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from "@/utils/dbConnect";
import { authConfig } from "@/utils/auth.config";

const login = async (credentials) => {
  try {
    await connectToDB();
    const user = await User.findOne({ username: credentials.username });
 
    if (!user) throw new Error("User does not xxexist");

    // const isPasswordCorrect = await bcrypt.compare(
    //   credentials.password,
    //   user.password
    // );
    const isPasswordCorrect = credentials.password===user.password;

    if (!isPasswordCorrect) throw new Error("Password incorrect");
    return user;
  } catch (err) {
    console.log("99999999999999999"+err);
    throw new Error("Failed to login!");
  }
};

export const { handlers: { GET, POST }, auth, signIn, signOut } =
  NextAuth({
    ...authConfig, // Extend the authConfig object here
    providers: [
      CredentialsProvider({ 
        async authorize(credentials) {
          if (credentials === null) return null;
          try {
            const user = await login(credentials);
            return user;
          } catch (error) {
            console.log("888888888888888"+error);
            throw new Error(error);
          }
        },
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile }) {
        return true;
      },
      ...authConfig.callbacks,
    },
  });
