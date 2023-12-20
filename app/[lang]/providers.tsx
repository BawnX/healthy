'use client'

import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type Dictionaries } from '../commons/types/dictionaries'
import { useDictionaryStore } from '../commons/store/dictionaryStore'

export interface ProvidersProps {
  children: React.ReactNode
  dictionary: Dictionaries
}

export function Providers ({ children, dictionary }: ProvidersProps): JSX.Element {
  const { theme } = useTheme()
  const store = useDictionaryStore(state => state.setDictionary)
  store(dictionary)
  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme={theme}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
