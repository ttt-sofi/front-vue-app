import { mount } from '@vue/test-utils';
import { describe, test, expect } from 'vitest';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

describe('Vistas', () => {
  test('HomeView se renderiza correctamente', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.text()).toContain('Home Page'); // Verifica contenido
  });

  test('AboutView se renderiza correctamente', () => {
    const wrapper = mount(AboutView);
    expect(wrapper.text()).toContain('This is an about page'); // Verifica contenido
  });
});