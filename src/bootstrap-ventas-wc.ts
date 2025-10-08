// Registro de Web Component para la feature de Ventas (Angular 12)
// Nota: Requiere @angular/elements y el polyfill document-register-element

import '@ungap/custom-elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { VentasElementsModule } from './app/features/ventas/ventas-elements.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Bootstrap del módulo y registro del custom element
platformBrowserDynamic()
  .bootstrapModule(VentasElementsModule)
  .then(() => {
    // El registro del custom element ocurre en ngDoBootstrap del módulo
  })
  .catch((err) =>
    console.error('Error bootstrapping VentasModule as Web Component:', err)
  );
