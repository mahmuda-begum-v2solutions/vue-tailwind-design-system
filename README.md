### vue-tailwind-design-system

A Vue 3 UI design system built with Tailwind CSS and TypeScript.
Provides reusable, accessible, and customizable UI components for your Vue 3 projects.

[📘 Live Storybook Demo & Docs](https://mahmuda-begum-v2solutions.github.io/vue-tailwind-design-system)

[📦 NPM Package](https://www.npmjs.com/package/vue-tailwind-design-system)

[💻 Demo Project Using the Package](https://github.com/mahmuda-begum-v2solutions/vue-tailwind-design-system-demo-npm)

## Installation

### Install the package from npm:

```bash
npm install vue-tailwind-design-system
```

#### or

```bash
yarn add vue-tailwind-design-system
```

## Usage

### Import the components you need in your Vue 3 project:

###### 1. Import the styles in your main.ts:

```ts
// main.ts
import 'vue-tailwind-design-system/style.css'
```

###### 2. Use components in any Vue 3 component file:

```vue
<!-- ExampleComponent.vue -->
<script setup lang="ts">
import { CButton } from 'vue-tailwind-design-system'

function handleClick() {
  alert('Button clicked!')
}
</script>

<template>
  <CButton label="Click Me" :isLoading="false" :disabled="false" @click="handleClick" />
</template>
```

###### 🧪 Storybook Playground

The Storybook demo includes a Playground story for CButton that exposes all props for live interaction and testing:

```ts
// Example: Storybook Playground configuration for CButton
export const Playground: Story = {
  args: {
    label: 'Button',
    disabled: false,
    isLoading: false,
    role: 'primary',
    backgroundColorType: 'solid',
    borderColorType: 'primary',
    borderWidth: '1',
    buttonRadius: 'pill',
    textColor: 'white',
    classes: 'shadow-md p-3',
    iconSize: 'default',
    leadingIcon: 'None',
    trailingIcon: 'Button',
    Icon: 'None',
    styles: '',
    theme: 'light',
    typographySize: 'lg',
    fontWeight: 'bold',
    leading: '6',
  },
}
```

You can use the Playground in Storybook to experiment with different button styles and behaviors.

## Available Components

| Component | Description                                    |
| --------- | ---------------------------------------------- |
| `CButton` | Main button component styled with Tailwind CSS |

More components will be added soon.

### ✅ Features

- Vue 3 components written in TypeScript
- Styled with Tailwind CSS utilities
- Fully documented and demoed in Storybook
- Easy to integrate in other Vue projects
- Supports hot-reload during development
- Includes unit tests with Vitest
- ESLint and Prettier configured for consistent code style

## 🛠 TypeScript Users

If you see a TypeScript warning like:

```bash
Could not find a declaration file for module 'vue-tailwind-design-system'.
```

Don’t worry — the types are included and working correctly. This warning may appear if your environment doesn’t fully support exports field resolution in package.json.

### ✅ Workaround

You can explicitly map the type using a paths entry in your consumer project’s tsconfig.json:

```bash
{
  "compilerOptions": {
    "paths": {
      "vue-tailwind-design-system": [
        "node_modules/vue-tailwind-design-system/dist/vue-tailwind-design-system.es.js"
      ]
    }
  }
}
```

Or, you can safely ignore the warning — everything will still work correctly at build time and in most IDEs like VSCode.

### ⚠️ About Vite Export Warning

When building this library, you might see:

```bash
▲ [WARNING] The condition "types" here will never be used...
```

This is a known behavior in Vite when using exports fields in package.json. The warning does not affect type resolution in projects using this package and is safe to ignore.

## License

### MIT © Mahmuda Begum
