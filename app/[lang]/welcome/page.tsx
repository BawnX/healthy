import { type JSX } from 'react'
import { getDictionary } from '../../commons/functions/dictionary'

export default async function WelcomePage ({ params: { lang } }: { params: { lang: string } }): Promise<JSX.Element> {
  const dictionary = await getDictionary(lang)

  return (
    <h1>{dictionary.name}</h1>
  )
}
