import { mount } from '@vue/test-utils';
import ButtonMin from '@/components/Button/ButtonMin.vue';

describe('ButtonMin.vue', () => {
  test('Testing Props', () => {
    const wrapper = mount(ButtonMin, {
      propsData: {
        type: 'button',
      },
    });
    expect(wrapper.props().type).toBe('button');
  });
});
