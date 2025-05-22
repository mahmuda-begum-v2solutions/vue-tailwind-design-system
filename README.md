### vue-tailwind-design-system

A Vue 3 UI design system built with Tailwind CSS and TypeScript.
Provides reusable, accessible, and customizable UI components for your Vue 3 projects.
[Live Demo & Docs](https://mahmuda-begum-v2solutions.github.io/vue-tailwind-design-system)

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

## License

### MIT © Mahmuda Begum
