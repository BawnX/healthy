export interface Dictionaries {
  name: string
  description: string
  navItems: NavItem[]
  navMenuItems: NavItem[]
  links: Links
}

export interface NavItem {
  label: string
  href: string
}

export interface Links {
  github: string
  twitter: string
  docs: string
  discord: string
  sponsor: string
}

export interface DictionaryStore {
  dictionary: Dictionaries
  setDictionary: (dictionary: Dictionaries) => void
}
