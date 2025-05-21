import type { Preview } from '@storybook/vue3'
import '../src/index.css'
import { applyThemeFromStoryArgs } from '../src/utils/themeBridge'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      // Adding a 'theme' control for Storybook UI to toggle between light and dark themes
      theme: {
        options: ['light', 'dark'],
        defaultValue: 'light', // Default theme if not specified
      },
    },
  },
  decorators: [
    (story, context) => {
      // Get the theme from Storybook args, defaulting to 'light' if not provided
      const theme = context.args?.theme ?? 'light'
      // Apply the theme globally via the themeBridge utility
      applyThemeFromStoryArgs(theme)
      // Return the rendered story with the applied theme
      return story()
    },
  ],
}

export default preview
