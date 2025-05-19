'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Link from "next/link"
import { signIn } from 'next-auth/react'
import { authOptions } from "@/lib/authOptions"


const formSchema = z.object({
  correo: z.string().email({
    message: "Debe ingresar un correo electrónico.",
  }),
  nombreUsuario: z.string().min(2, {
    message: "El nombre de usuario debe contener al menos 2 caracteres.",
  }),
  contraseña: z.string().min(6, { message: "Contraseña inválida, ingresa al menos 6 caracteres." }),
  nombre: z.string().min(2, {
    message: "El nombre debe contener al menos 2 caracteres.",
  }).max(30, {
    message: "El nombre debe contener menos de 30 caracteres.",
  }),
})

export default function ProfileForm() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      correo: '',
      nombreUsuario: '',
      contraseña: '',
      nombre: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch('/api/auth/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (res.ok) {

      const result = await signIn("credentials", {
        redirect: false,
        email: values.correo,
        password: values.contraseña
      });

      if (result?.ok) {
        router.push('/extras/bienvenida');
      } else {
        alert("Error al iniciar sesión después del registro");
      }
    } else {
      const data = await res.json();
      alert(data.error || "Error durante el registro");
    }
  }

  return (
    (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-[#0C0F1A] p-10 rounded-2xl shadow-lg w-full max-w-md space-y-6 relative z-10 border border-[#48506F]"
        >
          <div className="flex items-center justify-center">
            <h1 className="text-white text-6xl font-bold">Onda </h1>
            <Image src="/logo.svg" alt="logo" width={120} height={120} />
          </div>

          <h2 className="text-white text-2xl font-semibold text-left">Regístrate</h2>

          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#ADB5BD] font-light">Nombre completo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="bg-[#1f2937] text-white placeholder-[#1f2937] focus:ring-2 focus:ring-violet-500  border-[#48506F]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nombreUsuario"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#ADB5BD] font-light">Nombre de usuario</FormLabel>
                <FormControl>
                  <Input
                    placeholder="usuario123"
                    className="bg-[#1f2937] text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500  border-[#48506F]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="correo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#ADB5BD] font-light">Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="bg-[#1f2937] text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500  border-[#48506F]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contraseña"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#ADB5BD] font-light">Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#1f2937] text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500  border-[#48506F]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-6 rounded-full font-semibold hover:opacity-90 transition"
          >
            Registrarse
          </Button>
          <div className="text-center text-sm text-gray-400">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/auth/login" className="text-violet-400 hover:underline">
              Inicia sesión
            </Link>
          </div>
        </form>
      </Form>
    )
  )
}