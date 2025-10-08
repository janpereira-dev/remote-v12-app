import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { MatButtonModule } from '@angular/material/button';
// BrowserModule/BrowserAnimationsModule deben estar en el módulo shell que arranca como Web Component

@NgModule({
  declarations: [VentasComponent],
  imports: [CommonModule, VentasRoutingModule, MatButtonModule],
})
export class VentasModule {}
