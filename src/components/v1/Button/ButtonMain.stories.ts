import ButtonMain from './ButtonMain.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'DesignSystem/ButtonMain',
  component: ButtonMain,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    role: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'neutral'],
    },
    backgroundColorType: {
      control: 'select',
      options: ['solid', 'transparent', 'subtle', 'subdued'],
    },
    borderColorType: {
      control: 'select',
      options: [
        'transparent',
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
        'neutral',
      ],
    },
    borderWidth: {
      control: 'select',
      options: ['None', '1', '2'],
    },
    buttonRadius: {
      control: 'select',
      options: ['None', 'sm', 'md', 'lg', 'pill', 'circle'],
    },
    textColor: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
        'neutral',
        'white',
        'black',
      ],
    },
    iconSize: {
      control: 'select',
      options: ['xsmall', 'small', 'default', 'medium', 'large', 'extralarge', 'mega'],
    },
    classes: { control: 'text' },
    leadingIcon: {
      control: 'select',
      options: ['None', 'ArrowUp', 'ArrowDown', 'CheckMark'],
    },
    trailingIcon: {
      control: 'select',
      options: ['None', 'ArrowUp', 'ArrowDown', 'CheckMark'],
    },
    Icon: {
      control: 'select',
      options: ['None', 'ArrowUp', 'ArrowDown', 'CheckMark'],
    },
    styles: { control: 'text' },
    theme: { control: 'select', options: ['light', 'dark'] },
    typographySize: { control: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'] },
    fontWeight: { control: 'select', options: ['normal', 'medium', 'semibold', 'bold'] },
    leading: {
      control: 'select',
      options: ['none', '6', '7', '8'],
    },
    onClick: { action: 'click' },
  },
} satisfies Meta<typeof ButtonMain>

export default meta

type Story = StoryObj<typeof meta>

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

export const Label: Story = {
  args: {
    label: 'Button',
  },
}

export const BackgroundColor: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Background Color</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="solid" backgroundColorType="solid" role="primary"/>
            <ButtonMain label="transparent" backgroundColorType="transparent" role="primary" />
            <ButtonMain label="subtle" backgroundColorType="subtle" role="primary" />
            <ButtonMain label="subdued" backgroundColorType="subdued" role="primary" />
          </div>
        </div>
    `,
  }),
}

export const BackgroundColorType: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Background Color Type</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="solid" role="primary"/>
            <ButtonMain label="secondary" backgroundColorType="solid" role="secondary" />
            <ButtonMain label="tertiary" backgroundColorType="solid" role="tertiary" />
            <ButtonMain label="success" backgroundColorType="solid" role="success" />
            <ButtonMain label="warning" backgroundColorType="solid" role="warning" />
            <ButtonMain label="danger" backgroundColorType="solid" role="danger" />
            <ButtonMain label="neutral" backgroundColorType="solid" role="neutral" />
          </div>
        </div>
    `,
  }),
}

export const TextColor: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Text Color</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="primary" textColor="primary"/>
            <ButtonMain label="secondary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="secondary" textColor="secondary"/>
            <ButtonMain label="tertiary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="tertiary" textColor="tertiary"/>
            <ButtonMain label="success" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="success" textColor="success"/>
            <ButtonMain label="warning" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="warning" textColor="warning"/>
            <ButtonMain label="danger" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="danger" textColor="danger"/>
            <ButtonMain label="neutral" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="neutral" textColor="neutral"/>
              <ButtonMain label="white" backgroundColorType="solid" role="neutral" borderWidth="2" borderColorType="transparent" textColor="white"/>
                <ButtonMain label="black" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="neutral" textColor="black"/>
          </div>
        </div>
    `,
  }),
}

export const BorderColor: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Color</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="transparent" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="transparent"/>
            <ButtonMain label="primary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="primary"/>
            <ButtonMain label="secondary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="secondary"/>
            <ButtonMain label="tertiary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="tertiary"/>
            <ButtonMain label="success" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="success"/>
            <ButtonMain label="warning" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="warning"/>
            <ButtonMain label="danger" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="danger"/>
            <ButtonMain label="neutral" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="neutral"/>
          </div>
        </div>
    `,
  }),
}

export const BorderWidth: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Width</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="None" role="primary" backgroundColorType="transparent" borderColorType="transparent" borderWidth="None"/>
            <ButtonMain label="1" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="1"/>
            <ButtonMain label="2" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2"/>
             <ButtonMain label="None" role="primary" backgroundColorType="transparent" borderColorType="transparent" classes="shadow-md" borderWidth="None"/>
          </div>
        </div>
    `,
  }),
}

export const BorderRadius: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Radius with BackGround Color</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="None" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="None"/>
            <ButtonMain label="sm" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="sm"/>
            <ButtonMain label="md" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md"/>
            <ButtonMain label="lg" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="lg"/>
            <ButtonMain label="pill (variant)" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="pill"/>
            <ButtonMain label="circle" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-12 h-12"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Radius with Only Border</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="None" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="None"/>
            <ButtonMain label="sm" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="sm"/>
            <ButtonMain label="md" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"/>
            <ButtonMain label="lg" role="primary" backgroundColorType="transparent" borderColorType="primary"borderWidth="2" buttonRadius="lg"/>
            <ButtonMain label="pill (variant)" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="pill"/>
            <ButtonMain label="circle" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="circle" classes="!p-3 w-12 h-12"/>
          </div>
        </div>
    `,
  }),
}

export const IconStyles: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowUp"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowUp"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="None" Icon="ArrowUp"/>
              <ButtonMain role="secondary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowDown"/>
             <ButtonMain role="secondary" backgroundColorType="transparent" borderColorType="secondary" borderWidth="2" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowDown"/>
             <ButtonMain role="secondary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="None" Icon="ArrowDown"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">leading Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="Solid BackGround" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" leadingIcon="ArrowUp"/>
             <ButtonMain label="Only Border" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" leadingIcon="ArrowUp"/>
             <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp"/>
              <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" classes="shadow-md"/>
          </div>
        </div>
         <div>
          <h3 class="mb-4 font-semibold text-lg">trailing Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="Solid BackGround" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" trailingIcon="ArrowDown"/>
             <ButtonMain label="Only Border" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" trailingIcon="ArrowDown"/>
             <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" trailingIcon="ArrowDown"/>
              <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" trailingIcon="ArrowDown" classes="shadow-md"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">both leading and trailing Icon with label</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="Solid BackGround" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain label="Only Border" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
              <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown" classes="shadow-md"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">both leading and trailing Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
              <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown" classes="shadow-md"/>
          </div>
        </div>
        </div>
    `,
  }),
}

export const IconSize: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Icon Size</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="xsmall" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="xsmall"/>
             <ButtonMain label="small" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="small"/>
             <ButtonMain label="default" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="default"/>
             <ButtonMain label="medium" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="medium"/>
             <ButtonMain label="large" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="large"/>
             <ButtonMain label="extralarge" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="extralarge"/>
             <ButtonMain label="mega" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="mega"/>
          </div>
        </div>
      </div>
    `,
  }),
}

export const CustomClass: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Custom Class</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="!px-3 !py-2 shadow-md" role="primary" backgroundColorType="transparent" borderColorType="transparent" classes="!px-3 shadow-md" borderWidth="None"/>

           <ButtonMain label="!p-3 w-18 h-18" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-18 h-18"/>
        </div>
      </div>
      </div>
    `,
  }),
}

export const CustomStyle: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Custom Style</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="width: -webkit-fill-available;" backgroundColorType="solid" role="primary" styles="width: -webkit-fill-available;"/>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Disabled</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="solid" role="primary" disabled="true"/>
            <ButtonMain label="secondary" backgroundColorType="solid" role="secondary"disabled="true" />
            <ButtonMain label="tertiary" backgroundColorType="solid" role="tertiary" disabled="true"/>
            <ButtonMain label="success" backgroundColorType="solid" role="success" disabled="true"/>
            <ButtonMain label="warning" backgroundColorType="solid" role="warning" disabled="true"/>
            <ButtonMain label="danger" backgroundColorType="solid" role="danger" disabled="true"/>
            <ButtonMain label="neutral" backgroundColorType="solid" role="neutral" disabled="true"/>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Loading</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="solid" role="primary" isLoading="true"/>
            <ButtonMain label="secondary" backgroundColorType="solid" role="secondary" isLoading="true"/>
            <ButtonMain label="tertiary" backgroundColorType="solid" role="tertiary" isLoading="true"/>
            <ButtonMain label="success" backgroundColorType="solid" role="success" isLoading="true"/>
            <ButtonMain label="warning" backgroundColorType="solid" role="warning" isLoading="true"/>
            <ButtonMain label="danger" backgroundColorType="solid" role="danger" isLoading="true"/>
            <ButtonMain label="neutral" backgroundColorType="solid" role="neutral" isLoading="true"/>
          </div>
        </div>
      </div>
    `,
  }),
}

export const FontTypograhy: Story = {
  render: () => ({
    components: { ButtonMain },
    template: `
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Font Typograhy - SIZE</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="xs size" backgroundColorType="solid" role="primary" typographySize="xs"/>
            <ButtonMain label="sm size" backgroundColorType="solid" role="primary" typographySize="sm"/>
            <ButtonMain label="base size" backgroundColorType="solid" role="primary" typographySize="base"/>
            <ButtonMain label="lg size" backgroundColorType="solid" role="primary" typographySize="lg"/>
            <ButtonMain label="xl size" backgroundColorType="solid" role="primary" typographySize="xl"/>
            <ButtonMain label="2xl size" backgroundColorType="solid" role="primary" typographySize="2xl"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">Font Typograhy - WEIGHT</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="normal" backgroundColorType="transparent" role="primary" fontWeight="normal"/>
             <ButtonMain label="medium" backgroundColorType="transparent" role="primary" fontWeight="medium"/>
              <ButtonMain label="semibold" backgroundColorType="transparent" role="primary" fontWeight="semibold"/>
               <ButtonMain label="bold" backgroundColorType="transparent" role="primary" fontWeight="bold"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">Font Typograhy - LINE HEIGHT</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="leading-none test" backgroundColorType="transparent" role="primary" leading="none"/>
             <ButtonMain label="leading-6 test" backgroundColorType="transparent" role="primary" leading="6"/>
              <ButtonMain label="leading-7 test" backgroundColorType="transparent" role="primary" leading="7"/>
               <ButtonMain label="leading-8 test" backgroundColorType="transparent" role="primary" leading="8"/>
          </div>
        </div>
      </div>
    `,
  }),
}
