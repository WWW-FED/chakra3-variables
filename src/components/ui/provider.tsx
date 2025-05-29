"use client"

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const agnosticConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        main: { value: "#30923" },
        accent: { value: "#23003" }
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: { colors: "main" },
          description: "The background color of primary buttons",
        },
        secondary: {
          value: { colors: "accent" },
          description: "The background color of secondary buttons",
        },
      },
    },
  },
})

const system = createSystem(defaultConfig, config)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
