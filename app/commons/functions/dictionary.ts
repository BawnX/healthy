import 'server-only'
import { type Dictionaries } from '../types/dictionaries'

const dictionaries: Record<string, () => Promise<any>> = {
  en: async () => import('../dictionaries/en.json').then((module) => module.default),
  es: async () => import('../dictionaries/es.json').then((module) => module.default)
}

export const getDictionary = async (locale: string): Promise<Dictionaries> => dictionaries[locale]()
