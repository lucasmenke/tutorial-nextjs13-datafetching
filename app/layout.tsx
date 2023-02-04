import './globals.css'
import Navbar from './shared/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="max-w-3xl mx-auto mt-10 px-4">
        <Navbar />
        {children}
        </body>
    </html>
  )
}
