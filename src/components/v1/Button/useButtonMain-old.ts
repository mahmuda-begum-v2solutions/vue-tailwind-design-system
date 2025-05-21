// https://5ccbc373887ca40020446347-idzavsdems.chromatic.com/?path=/docs/button--docs
// https://storybook.js.org/showcase/tag/button
import { computed, watchEffect, type DefineComponent } from 'vue'
import type {
  ColorRole,
  BackgroundColorType,
  BorderColorType,
  BorderWidth,
  ButtonRadius,
  IconSize,
  TextColor,
  TypographySize,
  FontWeight,
  Leading,
  Theme,
} from '../../../types/buttonTypes'
import getIconComponent, { type IconName } from '../../../utils/getIconComponent'
import { useTheme } from '../../../utils/useTheme'
import { useA11yProps } from '../../../utils/useA11yProps'
import {
  baseClass,
  borderWidthMap,
  fontSizeMap,
  fontWeightMap,
  iconSizeMap,
  lineHeightMap,
  radiusClassMap,
} from '@/utils/buttonTokens'

export interface ButtonProps {
  label?: string
  disabled?: boolean
  isLoading?: boolean
  role?: ColorRole
  backgroundColorType?: BackgroundColorType
  borderColorType?: BorderColorType
  borderWidth?: BorderWidth
  buttonRadius?: ButtonRadius
  textColor?: TextColor
  classes?: string
  iconSize?: IconSize
  leadingIcon?: IconName
  trailingIcon?: IconName
  Icon?: IconName
  styles?: string
  theme?: Theme
  typographySize?: TypographySize
  fontWeight?: FontWeight
  leading?: Leading
}

export function useButtonMain(props: ButtonProps) {
  const { setTheme } = useTheme()
  const a11yProps = useA11yProps(props)

  watchEffect(() => {
    if (props.theme) {
      setTheme(props.theme)
    }
  })

  // Computed: Spinner size and color
  const iconSize = computed(() => {
    const size = (props.iconSize ?? 'default') as IconSize
    return iconSizeMap[size] ?? iconSizeMap['default']
  })

  const leadingIconComponent = computed<DefineComponent<unknown, unknown, unknown> | null>(() => {
    return props.leadingIcon ? getIconComponent(props.leadingIcon) : null
  })

  const trailingIconComponent = computed<DefineComponent<unknown, unknown, unknown> | null>(() => {
    return props.trailingIcon ? getIconComponent(props.trailingIcon) : null
  })

  const IconComponent = computed<DefineComponent<unknown, unknown, unknown> | null>(() => {
    return props.Icon ? getIconComponent(props.Icon) : null
  })

  // Compute inline styles from the prop (string or object)
  const styleObject = computed(() => {
    if (!props.styles) return undefined

    try {
      // If it's a valid JSON-style string, parse it
      if (props.styles.trim().startsWith('{')) {
        return JSON.parse(props.styles)
      }

      // Else, assume it's a raw CSS string (e.g., "width: 100%; height: 50px")
      const styleEntries = props.styles
        .split(';')
        .filter(Boolean)
        .map((rule) => {
          const [key, value] = rule.split(':')
          return [key.trim(), value.trim()]
        })

      return Object.fromEntries(styleEntries)
    } catch {
      console.warn('Invalid styles prop:', props.styles)
      return undefined
    }
  })

  // Computed: Button Class
  const buttonClass = computed(() => {
    const currentRole = props.role ?? 'primary'
    const bgType = props.backgroundColorType ?? 'solid'
    const borderRole = props.borderColorType ?? 'transparent'
    const borderW = props.borderWidth ?? 'None'
    const radius = props.buttonRadius ?? 'md'
    const customTextColor = props.textColor

    const classes: string[] = [baseClass]

    if (props.disabled) {
      switch (bgType) {
        case 'transparent':
          classes.push(
            'bg-transparent',
            `text-${customTextColor ?? currentRole}`,
            'cursor-not-allowed',
            'opacity-50',
          )
          break
        default:
          classes.push(
            `bg-${currentRole}-disabled`,
            `text-${customTextColor ?? 'white'}`,
            'cursor-not-allowed',
          )
          break
      }
    } else {
      switch (bgType) {
        case 'transparent':
          classes.push(
            'bg-transparent',
            `text-${customTextColor ?? currentRole}`,
            `hover:bg-${currentRole}-subtle`,
          )
          break
        case 'subtle':
          classes.push(
            `bg-${currentRole}-subtle`,
            `text-${customTextColor ?? currentRole}`,
            `hover:bg-${currentRole}-subdued`,
          )
          break
        case 'subdued':
          classes.push(
            `bg-${currentRole}-subdued`,
            `text-${customTextColor ?? 'white'}`,
            `hover:bg-${currentRole}`,
          )
          break
        case 'solid':
        default:
          classes.push(
            `bg-${currentRole}`,
            `text-${customTextColor ?? 'white'}`,
            `hover:bg-${currentRole}-hover`,
          )
          break
      }

      if (borderW !== 'None') {
        classes.push(
          borderWidthMap[borderW as Exclude<BorderWidth, 'None'>],
          borderRole === 'transparent' ? 'border-transparent' : `border-${borderRole}`,
        )
      }
    }

    classes.push(radiusClassMap[radius])

    if (props.typographySize) {
      classes.push(fontSizeMap[props.typographySize])
    } else {
      classes.push('text-base')
    }
    if (props.fontWeight) {
      classes.push(fontWeightMap[props.fontWeight])
    } else {
      classes.push('font-semibold')
    }
    if (props.leading) {
      classes.push(lineHeightMap[props.leading])
    } else {
      classes.push('leading-none')
    }

    if (props.classes) {
      classes.push(props.classes)
    } else {
      classes.push('px-3 py-2')
    }

    return classes.join(' ')
  })

  return {
    buttonClass,
    iconSize,
    leadingIconComponent,
    trailingIconComponent,
    IconComponent,
    styleObject,
    a11yProps,
  }
}
