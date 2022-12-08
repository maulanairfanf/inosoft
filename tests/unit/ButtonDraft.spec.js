import { mount } from '@vue/test-utils';
import ButtonDraft from '@/components/Button/ButtonDraft.vue';

describe('ButtonDraft.vue', () => {
  test('Testing Props', () => {
    const wrapper = mount(ButtonDraft, {
      propsData: {
        msg: 'Draft',
        type: 'button',
      },
    });
    expect(wrapper.props().msg).toBe('Draft');
    expect(wrapper.props().type).toBe('button');
  });
});
