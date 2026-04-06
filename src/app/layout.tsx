import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cinzel } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'ZeusFC | MMA 대회 운영 플랫폼',
  description: 'MMA 대회 운영, 선수 관리, 경기 결과를 한 곳에서',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">{children}</body>
    </html>
  )
}
