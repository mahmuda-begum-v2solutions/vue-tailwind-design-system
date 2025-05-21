import type { DefineComponent } from 'vue'

// Import all Vue components under the icons directory
const modules = import.meta.glob('../components/icons/**/*.vue', { eager: true })

// Define a type-safe base for icon components
type IconComponent = DefineComponent<unknown, unknown, unknown>

// Map: icon file name (without extension) → component
const icons: Record<string, IconComponent> = {}

for (const [path, mod] of Object.entries(modules)) {
  const match = path.match(/([^/]+)\.vue$/)
  if (match) {
    const iconName = match[1]
    icons[iconName] = (mod as { default: IconComponent }).default
  }
}

// Type of valid icon names
export type IconName = keyof typeof icons

// Type guard
export function isValidIcon(name: string): name is IconName {
  return name in icons
}

// Typed getter
export default function getIconComponent(iconName: IconName): IconComponent | null {
  const icon = icons[iconName]
  if (!icon && import.meta.env.MODE === 'development') {
    console.warn(`Icon "${iconName}" not found.`)
  }
  return icon || null
}
