<template>
  <button :class="buttonClass" :disabled="disabled" :style="styleObject" v-bind="a11yProps" @click="handleClick">
    <!-- Leading Icon -->
    <component v-if="leadingIconComponent && leadingIcon && !isLoading" :is="leadingIconComponent"
      :class="`mr-1 w-${iconSize} h-${iconSize}`" />

    <!-- Loading Spinner -->
    <span v-if="isLoading" class="animate-spin border-2 border-t-transparent border-white rounded-full" :class="[
      `w-${iconSize} h-${iconSize}`,
      label ? 'mr-2' : ''
    ]" />

    <!-- Icon -->
    <component v-if="IconComponent && Icon && !isLoading" :is="IconComponent" :class="`w-${iconSize} h-${iconSize}`" />

    <!-- Button Text -->
    <span v-if="label">{{ label }}</span>

    <!-- Trailing Icon -->
    <component v-if="trailingIconComponent && trailingIcon && !isLoading" :is="trailingIconComponent"
      :class="`ml-1 w-${iconSize} h-${iconSize}`" />
  </button>
</template>


<script lang="ts" setup>
import { useButtonMain, type ButtonProps } from './useButtonMain'

// Props
const props = defineProps<ButtonProps>()

const { buttonClass,
  iconSize,
  leadingIconComponent,
  trailingIconComponent,
  IconComponent,
  styleObject,
  a11yProps
} = useButtonMain(props)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

function handleClick(event: MouseEvent) {
  if (!props.isLoading && !props.disabled) {
    console.log('consoled yeeee') // Log 1 in console
    emit('click', event)
  }
}
</script>
