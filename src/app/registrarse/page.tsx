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
  }).max(20, {
    message: "El nombre debe contener menos de 20 caracteres.",
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
    const res = await fetch('/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })

    if (res.ok) {
      alert('¡Registro exitoso!')
      router.push('/login')
    } else {
      const data = await res.json()
      alert(data.error)
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
            className="w-full bg-[#6C63FF] hover:bg-violet-700 text-white"
          >
            Registrarse
          </Button>
        </form>
      </Form>
    )
  )
}