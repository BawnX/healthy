import { create } from 'zustand'
import { type DictionaryStore } from '../types/dictionaries'

export const useDictionaryStore = create<DictionaryStore>()((set) => ({
  dictionary: {
    description: '',
    links: { discord: '', docs: '', github: '', sponsor: '', twitter: '' },
    name: '',
    navItems: [],
    navMenuItems: []
  },
  setDictionary: (dictionary) => { set(() => ({ dictionary })) }
}))
