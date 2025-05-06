import '../styles/global.css';
import { Providers } from './providers';

// import { ReactNode } from 'react';

export const metadata = {
  title: 'Onda',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );

} 

