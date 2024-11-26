

import {store} from './store';
import { describe, test, expect } from 'vitest';

describe('Vuex Store', () => {
  // Verificar que el contador empieza en 0
  test('Valor inicial del contador es 0', () => {
    expect(store.state.count).toBe(0);
  });

  // Verificar que la mutación incrementa el contador
  test('Incrementar el contador', () => {
    store.commit('increment');
    expect(store.state.count).toBe(1);
  });

  // Verificar que la mutación decrementa el contador
  test('Decrementar el contador', () => {
    store.commit('decrement');
    expect(store.state.count).toBe(0);
  });
});