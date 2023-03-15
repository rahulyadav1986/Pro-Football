import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const AuthProviders = {
    providers:[
        GithubProvider({
            clientId: 'cc2cd95de2e8db6759a2',
            clientSecret: 'a9e4d62c39fb31017efd13311384684a337cdcbb'
        })
    ]
} 

export default NextAuth(AuthProviders)