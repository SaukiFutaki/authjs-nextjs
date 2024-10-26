import NextAuth from 'next-auth'

export const {handlers, signIn,signOut} = NextAuth({
    providers:[]
})