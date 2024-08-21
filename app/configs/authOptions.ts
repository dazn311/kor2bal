import {NextAuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import MailRuProvider from "next-auth/providers/mailru";
// import {prisma} from "../../prisma/prisma";
// import {hashSync} from "bcrypt";

export const authOptions:NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET as string,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID  as string,
            clientSecret: process.env.GITHUB_SECRET  as string,
        }),
        {
            id: "mailru",
            name: "Mail.ru",
            type: "oauth",
            clientId: process.env.MAILRU_CLIENT_ID,
            clientSecret: process.env.MAILRU_CLIENT_SECRET,
            authorization: "https://oauth.mail.ru/login",
            token: "https://oauth.mail.ru/token",
            userinfo: {
                async request(context) {
                    const res = await fetch(
                        `https://oauth.mail.ru/userinfo?access_token=${context.tokens.access_token}`
                    );
                    return await res.json();
                },
            },
            profile: (profile) => profile,
        },
        // MailRuProvider({
        //     clientId: process.env.MAILRU_CLIENT_ID as string,
        //     clientSecret: process.env.MAILRU_CLIENT_SECRET as string
        // })
    ],
    // callbacks: {
    //     async session({ session, user, token }){
    //         // Assign the userid and role from the jwt callback below
    //         if(session?.user) { session.user.id = token.uid; session.user.role=token.roleid }
    //         return session
    //     },
    //     async jwt({ token, user }){
    //         if(user) { token.uid = user.id; token.roleid=user.role  }
    //         return token;
    //     },
    // },
};

export default authOptions;