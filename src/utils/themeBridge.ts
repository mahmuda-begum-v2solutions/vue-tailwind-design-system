import { setTheme } from '../utils/useTheme'

/**
 * Storybook global decorator to sync the theme prop with your design system.
 * This allows you to apply 'light' or 'dark' theme globally across stories.
 */
export const applyThemeFromStoryArgs = (theme: 'light' | 'dark') => {
  setTheme(theme)
}
