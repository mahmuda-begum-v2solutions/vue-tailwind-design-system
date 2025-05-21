import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import path from 'path'

const isProdBuild = process.env.STORYBOOK_BUILD === 'true'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (storybookConfig) => {
    return mergeConfig(storybookConfig, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      base: isProdBuild ? '/vue-tailwind-design-system/' : '/',
    })
  },
}

export default config
