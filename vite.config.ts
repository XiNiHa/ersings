import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  plugins: [
    solidPlugin(),
    unocss({
      presets: [
        presetUno(),
        presetAttributify({
          prefix: 'uno-',
          prefixedOnly: true,
          trueToNonValued: true,
        }),
        presetIcons(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': './src',
    },
  },
  build: {
    target: 'esnext',
  },
})
