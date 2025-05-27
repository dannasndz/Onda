import '../styles/global.css';
import { Providers } from './providers';
import Image from "next/image"

export const metadata = {
  title: 'Onda',
  description: 'Tu plataforma musical',
  icons: {
    icon: [
      {
        url: '/logo.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/ONDAS.png"
            alt="ondaSup"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

