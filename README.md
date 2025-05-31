# 🎵 Onda - App de Recomendaciones y Reseñas Musicales

Una aplicación web para descubrir nueva música, escribir reseñas y obtener recomendaciones personalizadas basadas en tus gustos musicales.

## 🚀 Características

- **Recomendaciones Personalizadas**: Algoritmo que sugiere música basada en tus preferencias
- **Sistema de Reseñas**: Escribe y lee reseñas detalladas de álbumes y canciones
- **Exploración Musical**: Descubre nuevos artistas y géneros musicales
- **Interfaz Moderna**: Diseño responsivo y experiencia de usuario intuitiva
- **Búsqueda Avanzada**: Encuentra música por artista, álbum, género o estado de ánimo

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) 
- **Lenguaje**: TypeScript/JavaScript
- **Estilizado**: CSS Modules / Tailwind CSS

## 📋 Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (versión 18.0 o superior)
- **npm**, **yarn**, **pnpm** o **bun** como gestor de paquetes
- **Git** para clonar el repositorio

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/dannasndz/Onda.git
cd Onda
```

### 2. Instalar dependencias

Elige uno de los siguientes comandos según tu gestor de paquetes preferido:

```bash
# Con npm
npm install

# Con yarn
yarn install

# Con pnpm
pnpm install

# Con bun
bun install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
DATABASE_URL="postgresql://usuario:password@localhost:5432/onda_db"

# Last.fm API
LASTFM_API_KEY="tu_lastfm_api_key"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu_secreto_aleatorio"

# URL del sitio
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## 🚀 Ejecutar en Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
# Con npm
npm run dev

# Con yarn
yarn dev

# Con pnpm
pnpm dev

# Con bun
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Configuración adicional
Base de datos
Necesitas una base de datos PostgreSQL.

## 👤 Autor

**[@dannasndz](https://github.com/dannasndz)**

---

⭐ ¡Si te gusta este proyecto, dale una estrella en GitHub!

🎵 **¡Disfruta descubriendo nueva música con Onda!**
