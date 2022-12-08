import { mount } from '@vue/test-utils';
import ButtonPlus from '@/components/Button/ButtonPlus.vue';

describe('ButtonPlus.vue', () => {
  test('Testing Props', () => {
    const wrapper = mount(ButtonPlus, {
      propsData: {
        type: 'button',
      },
    });
    expect(wrapper.props().type).toBe('button');
  });
});
