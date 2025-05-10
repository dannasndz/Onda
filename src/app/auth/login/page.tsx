'use client'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import Link from 'next/link'

const loginSchema = z.object({
    correo: z.string().email({ message: 'Ingresa un correo válido' }),
    contraseña: z.string().min(6, { message: 'Contraseña inválida' }),
})

export default function LoginForm() {
    const router = useRouter()
    const [error, Seterror] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            correo: '',
            contraseña: '',
        },
    })

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        setIsLoading(true)
        Seterror(null)

        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: values.correo,
                password: values.contraseña,
            })

            if (res?.ok) {
                router.push('/inicio')
                router.refresh()
            } else {
                if (res?.error === "CredentialsSignin") {
                    Seterror("Correo o contraseña incorrectos.")
                } else {
                    Seterror(res?.error ?? "Ocurrió un error inesperado.")
                }
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error)
            Seterror("Error de conexión. Intente de nuevo.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-[#0C0F1A] p-10 rounded-2xl shadow-lg w-full max-w-md space-y-6 relative z-10 border border-[#48506F]"
            >
                <div className="flex items-center justify-center">
                    <h1 className="text-white text-6xl font-bold">Onda</h1>
                    <Image src="/logo.svg" alt="logo" width={120} height={120} />
                </div>

                <h2 className="text-white text-2xl font-semibold text-left">Inicia sesión</h2>
                {error && (
                    <p className="text-center text-red-500 text-sm font-medium">
                        {error}
                    </p>
                )}
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
                                    className="bg-[#1f2937] text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 border-[#48506F]"
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
                                    className="bg-[#1f2937] text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 border-[#48506F]"
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
                    disabled={isLoading}
                >
                    {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                </Button>
                <div className="text-center text-sm text-gray-400">
                    ¿Aún no tienes una cuenta?{" "}
                    <Link href="/auth/registro" className="text-violet-400 hover:underline">
                        Registrate
                    </Link>
                </div>
            </form>
        </Form>
    )
}