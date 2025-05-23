### vue-tailwind-design-system

A Vue 3 UI design system built with Tailwind CSS and TypeScript.
Provides reusable, accessible, and customizable UI components for your Vue 3 projects.
[Live Demo & Docs](https://mahmuda-begum-v2solutions.github.io/vue-tailwind-design-system)
[Package Link](https://www.npmjs.com/package/vue-tailwind-design-system)

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

```bash
<script setup lang="ts">
import { CButton } from 'vue-tailwind-design-system'
</script>

<template>
  <CButton @click="handleClick">Click Me</CButton>
</template>

<script setup lang="ts">
function handleClick() {
  alert('Button clicked!')
}
</script>
```

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
