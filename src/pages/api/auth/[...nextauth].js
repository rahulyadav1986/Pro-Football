import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const AuthProviders = {
    providers:[
        GithubProvider({
            clientId: '98ce1b739be3ab85b63d',
            clientSecret: '30f490f4282d6af6a3c3117cd707418e2eb7d09a'
        })
    ]
} 

export default NextAuth(AuthProviders)