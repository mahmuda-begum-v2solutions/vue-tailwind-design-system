import { ref, computed, watchEffect, onMounted } from 'vue'

const theme = ref('light') // Default to 'light' theme

// Apply theme-specific classes to the root element
const applyTheme = (theme: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme)
  }
}

// Initialize theme on client-side
onMounted(() => {
  // Determine system preference
  const prefersDark =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false

  // Retrieve stored theme or use system preference
  const storedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null

  theme.value = storedTheme || (prefersDark ? 'dark' : 'light')
  applyTheme(theme.value)
})

// Watch for theme changes and persist + apply them
watchEffect(() => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme.value)
  }
  applyTheme(theme.value)
})

// Computed property to expose current theme
const themeClass = computed(() => theme.value)

// Toggle between light and dark themes
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

// Explicitly set a new theme
const setTheme = (newTheme: 'light' | 'dark') => {
  if (newTheme === 'light' || newTheme === 'dark') {
    theme.value = newTheme
  } else {
    console.warn(`[useTheme] Invalid theme value: "${newTheme}". Must be 'light' or 'dark'.`)
  }
}

export function useTheme() {
  return {
    theme,
    themeClass,
    toggleTheme,
    setTheme,
  }
}

// Export the setter directly for external usage
export { setTheme }
