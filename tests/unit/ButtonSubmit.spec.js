import { mount } from '@vue/test-utils';
import ButtonSubmit from '@/components/Button/ButtonSubmit.vue';

describe('ButtonSubmit.vue', () => {
  test('Testing Props', () => {
    const wrapper = mount(ButtonSubmit, {
      propsData: {
        msg: 'Submit',
        type: 'submit',
      },
    });
    expect(wrapper.props().msg).toBe('Submit');
    expect(wrapper.props().type).toBe('submit');
  });
});
