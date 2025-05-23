import { computed, watchEffect } from 'vue'
import type {
  ColorRole,
  BackgroundColorType,
  BorderWidth,
  TextColor,
  ButtonProps,
} from '../../../types/buttonTypes'
import getIconComponent from '../../../utils/getIconComponent'
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
} from '../../../utils/buttonTokens'

function parseStyles(styles?: string) {
  if (!styles) return undefined
  try {
    const trimmed = styles.trim()
    if (trimmed.startsWith('{')) return JSON.parse(trimmed)
    return Object.fromEntries(
      trimmed
        .split(';')
        .map((rule) => rule.trim())
        .filter(Boolean)
        .map((rule) => {
          const [key, ...vals] = rule.split(':')
          return [key.trim(), vals.join(':').trim()]
        }),
    )
  } catch {
    console.warn('Invalid styles prop:', styles)
    return undefined
  }
}

function buildDisabledClasses(
  bgType: BackgroundColorType,
  currentRole: ColorRole,
  customTextColor?: TextColor,
) {
  if (bgType === 'transparent') {
    return [
      'bg-transparent',
      `text-${customTextColor ?? currentRole}`,
      'cursor-not-allowed',
      'opacity-50',
    ]
  }
  return [`bg-${currentRole}-disabled`, `text-${customTextColor ?? 'white'}`, 'cursor-not-allowed']
}

function buildEnabledClasses(
  bgType: BackgroundColorType,
  currentRole: ColorRole,
  customTextColor?: TextColor,
) {
  switch (bgType) {
    case 'transparent':
      return [
        'bg-transparent',
        `text-${customTextColor ?? currentRole}`,
        `hover:bg-${currentRole}-subtle`,
      ]
    case 'subtle':
      return [
        `bg-${currentRole}-subtle`,
        `text-${customTextColor ?? currentRole}`,
        `hover:bg-${currentRole}-subdued`,
      ]
    case 'subdued':
      return [
        `bg-${currentRole}-subdued`,
        `text-${customTextColor ?? 'white'}`,
        `hover:bg-${currentRole}`,
      ]
    case 'solid':
    default:
      return [
        `bg-${currentRole}`,
        `text-${customTextColor ?? 'white'}`,
        `hover:bg-${currentRole}-hover`,
      ]
  }
}

export function useButtonMain(props: ButtonProps) {
  const { setTheme } = useTheme()
  const a11yProps = useA11yProps(props)

  watchEffect(() => {
    if (props.theme) setTheme(props.theme)
  })

  const iconSize = computed(
    () => iconSizeMap[props.iconSize ?? 'default'] ?? iconSizeMap['default'],
  )

  const leadingIconComponent = computed(() =>
    props.leadingIcon ? getIconComponent(props.leadingIcon) : null,
  )

  const trailingIconComponent = computed(() =>
    props.trailingIcon ? getIconComponent(props.trailingIcon) : null,
  )

  const IconComponent = computed(() => (props.Icon ? getIconComponent(props.Icon) : null))

  const styleObject = computed(() => parseStyles(props.styles))

  const buttonClass = computed(() => {
    const currentRole = props.role ?? 'primary'
    const bgType = props.backgroundColorType ?? 'solid'
    const borderRole = props.borderColorType ?? 'transparent'
    const borderW = props.borderWidth ?? 'None'
    const radius = props.buttonRadius ?? 'md'
    const customTextColor = props.textColor

    const classes = [baseClass]

    if (props.disabled) {
      classes.push(...buildDisabledClasses(bgType, currentRole, customTextColor))
    } else {
      classes.push(...buildEnabledClasses(bgType, currentRole, customTextColor))

      if (borderW !== 'None') {
        classes.push(borderWidthMap[borderW as Exclude<BorderWidth, 'None'>])
        classes.push(borderRole === 'transparent' ? 'border-transparent' : `border-${borderRole}`)
      }
    }

    classes.push(radiusClassMap[radius])

    classes.push(fontSizeMap[props.typographySize ?? 'base'] ?? 'text-base')
    classes.push(fontWeightMap[props.fontWeight ?? 'semibold'] ?? 'font-semibold')
    classes.push(lineHeightMap[props.leading ?? 'none'] ?? 'leading-none')

    classes.push(props.classes ?? 'px-3 py-2')

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
