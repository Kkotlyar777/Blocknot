import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.sass'
import TrashLayout from './trash/layout'
import SidebarLayout from './sidebar/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bloknot',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><link rel="icon" type="image/svg+xml" href="./Logo.ico" sizes="any" /></head>
      <body className={inter.className}>{children}</body>
      <SidebarLayout />
    </html>
  )
}
