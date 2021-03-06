import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';

import { ConversorRoutingComponent } from './conversor-routing.component';
import { ConversorRoutingModule } from './conversor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ConversorRoutingModule
  ],
  declarations: [
    ConversorComponent,
    ConversorRoutingComponent,
  	NumeroDirective,
  	ModalCotacaoComponent,
  	DataBrPipe
  ],
  exports: [
  	ConversorComponent
  ],
  providers: [
  	MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
