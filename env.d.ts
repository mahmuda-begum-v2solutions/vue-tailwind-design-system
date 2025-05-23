/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<
    Record<string, unknown>, // props
    Record<string, unknown>, // raw bindings (setup returns)
    Record<string, (...args: unknown[]) => void> // emits
  >

  export default component
}
