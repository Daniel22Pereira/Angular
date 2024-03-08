import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './components/converter.component';

import { CoinService } from './services/coin.service';
import { ConverterService } from './services/converter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ConverterComponent
  ],
  providers: [
    CoinService,
    ConverterService
  ]
})
export class ConverterModule { }