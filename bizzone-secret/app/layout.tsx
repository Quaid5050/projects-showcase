import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bizz1 Digital — Business Hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/panel.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
