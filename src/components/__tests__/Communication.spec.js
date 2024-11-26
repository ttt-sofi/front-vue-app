// Communication.spec.js
import { mount } from '@vue/test-utils';
import Parent from '../Parent.vue';
import { describe, test, expect } from 'vitest';

describe('Comunicación entre componentes', () => {
  test('Se actualiza el texto en el Parent al enviar texto desde el Child', async () => {
    const wrapper = mount(Parent);
    const child = wrapper.findComponent({ name: 'Child' });

    child.vm.$emit('text-sent', 'Hola');
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('Texto recibido: Hola');
  });
});
