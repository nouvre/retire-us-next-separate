import axios from "@/util/api";

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: any = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials, req) {
        const user = await axios
          .post("/auth/login", credentials)
          .then((res) => res.data)
          .catch((error) => {
            console.log("-==================>", error);
            if (error.response.status !== 422) throw error;

            // setErrors(error.response.data.errors);
          });
        console.log(user);
        if (user) return user;
        else return null;
      },
    }),
  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      console.log(user);
      // if (account?.accessToken) {
      //   token.accessToken = account.accessToken;
      // }
      // return token;
    },
  },
  secret: process.env.JWT_SECRET,
};
export default NextAuth(authOptions);
