import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { Lib2Component } from './lib2/lib2.component';

@NgModule({
  declarations: [MyLibComponent, Lib2Component],
  imports: [CommonModule],
  exports: [MyLibComponent, Lib2Component],
})
export class MyLibModule {}
