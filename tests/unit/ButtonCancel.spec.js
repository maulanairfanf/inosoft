import { mount } from '@vue/test-utils';
import ButtonCancel from '@/components/Button/ButtonCancel.vue';

describe('ButtonCancel.vue', () => {
  test('Testing Props', () => {
    const wrapper = mount(ButtonCancel, {
      propsData: {
        msg: 'Cancel',
        type: 'button',
      },
    });
    expect(wrapper.props().msg).toBe('Cancel');
    expect(wrapper.props().type).toBe('button');
  });
});
