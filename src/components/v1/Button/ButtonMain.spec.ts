import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonMain from './ButtonMain.vue'

describe('ButtonMain', () => {
  it('renders with a label', () => {
    const wrapper = mount(ButtonMain, {
      props: {
        label: 'Test Button',
      },
    })
    expect(wrapper.text()).toContain('Test Button')
  })

  it('renders as disabled when disabled prop is true', () => {
    const wrapper = mount(ButtonMain, {
      props: {
        label: 'Disabled Button',
        disabled: true,
      },
    })
    const button = wrapper.find('button')
    expect(button.attributes('disabled')).toBeDefined()
  })

  it('shows loading spinner when isLoading is true', () => {
    const wrapper = mount(ButtonMain, {
      props: {
        label: 'Loading Button',
        isLoading: true,
      },
    })

    const spinner = wrapper.find('.animate-spin')
    expect(spinner.exists()).toBe(true)
  })

  it('emits click event when clicked and not loading/disabled', async () => {
    const wrapper = mount(ButtonMain, {
      props: {
        label: 'Clickable',
      },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(ButtonMain, {
      props: {
        label: 'Disabled',
        disabled: true,
      },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(ButtonMain, {
      props: {
        label: 'Loading',
        isLoading: true,
      },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('applies custom class when `classes` prop is set', () => {
    const wrapper = mount(ButtonMain, {
      props: {
        label: 'Styled Button',
        classes: 'custom-class',
      },
    })
    const button = wrapper.find('button')
    expect(button.classes()).toContain('custom-class')
  })
})
