"use client"

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        white: { value: "purple" },
        black: { value: "--kx-typography-colors-button-primary-color" }
      },
    },
    semanticTokens: {
      colors: {
        "button-primary-bgcolor": {
          value: { base: "white", _dark: "black" },
          description: "The background color of the primary button",
        },
        "button-primary-color": {
          value: { base: "black", _dark: "white" },
          description: "The text color of the primary button",
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
