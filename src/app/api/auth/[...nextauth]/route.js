import connectDB from '@/app/utils/mongo'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '../../../models/User'
import bcrypt from 'bcryptjs'

const authHandler = NextAuth({

    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                mail: { label: "email", type: "email", placeholder: "Usuario" },
                pass: { label: "password", type: "password", placeholder: "Contraseña" }
            },
            async authorize(credentials, req) {
                await connectDB()

                const user = await User.findOne({ mail: credentials?.mail, }).select("+pass");
                console.log(user)
                if (!user) throw new Error('Invalid_credentials')

                // const passMatch = await bcrypt.compare(credentials?.pass, user.pass)
                const passMatch = (credentials?.pass === user.pass)
                if (!passMatch) throw new Error('Invalid credentials')

                return user
            },
        }),
    ],
    callbacks: {
        jwt({ user, token, account, profile, session }) {
            if (user) token.user = user;
            return token
        },
        session({ session, token }) {
            session.user = token?.user
            return session
        }
    },
    pages: {
        signIn: "/auth"
    }

})

export { authHandler as GET, authHandler as POST }