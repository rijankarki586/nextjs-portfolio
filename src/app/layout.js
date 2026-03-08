import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rijan Karki Portfolio',
  description: 'Welcome to my portfolio website! I am a passionate web developer with expertise in building responsive and user-friendly websites and applications. Explore my projects, skills, and achievements to learn more about my work and experience in the field of web development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
