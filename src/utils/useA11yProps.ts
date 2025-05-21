import { computed } from 'vue'

export interface A11yProps {
  'aria-label': string
  'aria-disabled': boolean
  role: 'button' | 'link'
  tabIndex: number
}

export function useA11yProps(props: {
  label?: string
  disabled?: boolean
  loading?: boolean
  icon?: string
  variant?: string
}): A11yProps {
  // Compute aria-label: fallback if only icon is provided
  const ariaLabel = computed(() => {
    if (props.icon && !props.label) {
      return `${props.icon} button`
    }
    return props.label ?? 'Button'
  })

  // Compute aria-disabled state
  const ariaDisabled = computed(() => !!props.disabled || !!props.loading)

  // Determine role (link or button)
  const role = computed(() => (props.variant === 'link' ? 'link' : 'button'))

  // Compose A11yProps object
  return {
    'aria-label': ariaLabel.value,
    'aria-disabled': ariaDisabled.value,
    role: role.value,
    tabIndex: ariaDisabled.value ? -1 : 0,
  }
}
