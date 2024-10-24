import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { prisma } from "@/src/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,

  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({ user: { email } }) {
      const currentUser = await prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (currentUser) {
        return true;
      } else {
        return "/register";
      }
    },
    async jwt({ token, user }) {
      // If it's the first time the token is created (after user signs in), add the user's ID to the token
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
