import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';

import { VentasModule } from './ventas.module';
import { VentasComponent } from './ventas.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, VentasModule],
})
export class VentasElementsModule implements DoBootstrap {
  constructor(private readonly injector: Injector) {}

  ngDoBootstrap(): void {
    const tagName = 'remote-v12-ventas';
    if (!customElements.get(tagName)) {
      const element = createCustomElement(VentasComponent, {
        injector: this.injector,
      });
      customElements.define(tagName, element);
    }
  }
}
