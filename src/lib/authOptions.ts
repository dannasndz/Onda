import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Correo", type: "text", placeholder: "ejemplo@gmail.com" },
        password: { label: "Contraseña", type: "password", placeholder: "******" }
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Faltan credenciales necesarias");
        }

        const usuarioExistente = await prisma.usuario.findUnique({
          where: { correo: credentials.email }
        });

        if (!usuarioExistente) return null;

        const matchPassword = await bcrypt.compare(
          credentials.password,
          usuarioExistente.contraseña
        );

        if (!matchPassword) return null;

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
    signOut: "/",
    error: "/inicio",
    newUser: "/auth/registro",
  }
};
