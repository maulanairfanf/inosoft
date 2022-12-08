import { mount } from '@vue/test-utils';
import ButtonSave from '@/components/Button/ButtonSave.vue';

describe('ButtonSave.vue', () => {
  test('Testing Props', () => {
    const wrapper = mount(ButtonSave, {
      propsData: {
        msg: 'Save as Draft',
        type: 'button',
      },
    });
    expect(wrapper.props().msg).toBe('Save as Draft');
    expect(wrapper.props().type).toBe('button');
  });
});
