import router from '../router'; // Importamos el router como exportación por defecto
import { describe, test, expect } from 'vitest';

describe('Vue Router', () => {
  test('La ruta "/" tiene el componente HomeView asignado', () => {
    const route = router.resolve({ path: '/' }); // Usamos un objeto con `path`
    expect(route.name).toBe('Home'); // Verificamos el nombre de la ruta
    expect(route.matched[0].components.default).toBeTruthy(); // Aseguramos que hay un componente
  });

  test('La ruta "/about" tiene el componente AboutView asignado', () => {
    const route = router.resolve({ path: '/about' }); // Usamos un objeto con `path`
    expect(route.name).toBe('About'); // Verificamos el nombre de la ruta
    expect(route.matched[0].components.default).toBeTruthy(); // Aseguramos que hay un componente
  });
});
