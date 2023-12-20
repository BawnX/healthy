import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Navbar } from './navbar'
import { getDictionary } from '../commons/functions/dictionary'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams (): Promise<Array<{ lang: string }>> {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function Root ({ children, params }: { children: React.ReactNode, params: { lang: string } }): Promise<JSX.Element> {
  const dictionary = await getDictionary(params.lang)
  return (
    <html lang={params.lang} suppressHydrationWarning>
        <body className={inter.className} >
          <Providers dictionary={dictionary}>
            <Navbar />
            {children}
          </Providers>
        </body>
    </html>
  )
}
