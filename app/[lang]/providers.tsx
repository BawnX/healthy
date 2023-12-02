'use client'

import * as React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'

export interface ProvidersProps {
  children: React.ReactNode
}

export function Providers ({ children }: ProvidersProps): JSX.Element {
  const { theme } = useTheme()

  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme={theme}>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
