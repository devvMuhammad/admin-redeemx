import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const inputEmail = credentials?.email;
        const inputPassword = credentials?.password;

        if (
          inputEmail === process.env.EMAIL &&
          inputPassword === process.env.PASSWORD
        ) {
          return {
            name: "Muhammad Amjad",
            email: inputEmail,
            id: 455527,
          } as any;
        }
        throw new Error("Invalid Credentials");
      },
    }),
  ],
  // call,
};

export const handler = NextAuth({
  ...authOptions,
  // callbacks: {
  // async jwt({ token, account }) {
  //   // i want to include the id as an extra property, so first i need to check if the user is already registred, if not then create one
  //   connectDB();
  //   const customer = await User.findOne({ email: token.email })
  //     .select({ id: 1 })
  //     .lean();
  //   const customerId = customer?.id || "";
  //   console.log(customerId);
  //   // if not present, then generate a new one and save it to the database
  //   let newCustomerId;
  //   if (!customerId) {
  //     newCustomerId = generateCustomerID();

  //     await User.create({
  //       name: token.name,
  //       email: token.email,
  //       id: newCustomerId,
  //     });
  //   }

  //   if (account) {
  //     // token.extraProperty = "da da zama da taraf na";
  //     token.customerId = newCustomerId || customerId;
  //   }
  //   return token;
  // },
  // session({ session, token }) {
  //   // session.user.extraProperty = token.extraProperty;
  //   session.user.customerId = token.customerId;
  //   return session;
  // },
});

export { handler as GET, handler as POST };
