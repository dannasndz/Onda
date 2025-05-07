import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';

// Define interfaces para tus tipos personalizados
// interface Usuario {
//   id: string;
//   nombre: string;
//   correo: string;
// }

// interface CustomSession extends Session {
//   user: {
//     id: string;
//     nombre: string;
//     correo: string;
//     email?: string;
//   }
// }

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Correo", type: "text", placeholder: "ejemplo@gmail.com" },
        password: { label: "Contraseña", type: "password", placeholder: "******" }
      },
      async authorize(credentials, req) {

        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Faltan credenciales necesarias");
        }

        console.log("CREDENTIALS:", credentials);

        const usuarioExistente = await prisma.usuario.findUnique({
          where: { correo: credentials.email }
        });

        if (!usuarioExistente) {
          console.log("Usuario no encontrado");
          return null;
        }

        console.log(usuarioExistente)

        const matchPassword = await bcrypt.compare(
          credentials.password,
          usuarioExistente.contraseña
        );

        if (!matchPassword) {
          console.log("Contraseña incorrecta");
          return null;
        }

        return {
          id: usuarioExistente.id.toString(),
          name: usuarioExistente.nombreUsuario,
          email: usuarioExistente.correo,
        };
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.nombre = user.name;
        token.correo = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token && session.user) {
        session.user.name = token.nombre as string;
        session.user.email = token.correo as string;
      }
      return session;
    }
    
  },
  pages: {
    signIn: "/auth/login",
    signOut: '/',
    error: '/inicio',
    newUser: 'auth/registro',
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
