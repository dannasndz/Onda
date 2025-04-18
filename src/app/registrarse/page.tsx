'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Registro() {
  const [form, setForm] = useState({
    correo: '',
    nombreUsuario: '',
    contraseña: '',
    nombre: '',
    imagenPerfil: ''
  })

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
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
    <form onSubmit={handleSubmit}>
      <h1>Registro</h1>
      <input type="email" name="correo" placeholder="Correo" onChange={handleChange} required />
      <input type="text" name="nombreUsuario" placeholder="Nombre de usuario" onChange={handleChange} required />
      <input type="password" name="contraseña" placeholder="Contraseña" onChange={handleChange} required />
      <input type="text" name="nombre" placeholder="Nombre completo" onChange={handleChange} required />
      <input type="text" name="imagenPerfil" placeholder="URL de imagen de perfil" onChange={handleChange} />
      <button type="submit">Registrarse</button>
    </form>
  )
}
