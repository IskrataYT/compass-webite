
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from '@next/font/local'

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Ailerons-Typeface.otf',
      weight: '400'
    },
  ],
  variable: '--font-poppins'
})

const protoype = localFont({
  src: [
    {
      path: '../../public/fonts/Prototype.ttf',
      weight: '400'
    },
  ],
  variable: '--font-title'
})

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}  font-sans ${protoype.variable} font-title`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
