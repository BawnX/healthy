import 'server-only'
import { type Dictionaries } from '../commons/types/dictionaries'

const dictionaries: Record<string, () => Promise<any>> = {
  en: async () => import('../commons/dictionaries/en.json').then((module) => module.default),
  es: async () => import('../commons/dictionaries/es.json').then((module) => module.default)
}

export const getDictionary = async (locale: string): Promise<Dictionaries> => dictionaries[locale]()
