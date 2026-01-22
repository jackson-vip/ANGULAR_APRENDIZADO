import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  imports: [
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class AngularMaterialModule {}
