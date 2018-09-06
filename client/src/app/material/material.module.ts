import { NgModule } from '@angular/core';
import { MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatInput,
  MatFormFieldModule,
  MatExpansionModule,
  MatChipsModule,
  } from '@angular/material';

@NgModule({
  imports: [
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatChipsModule,
  ],
  exports: [
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInput,
    MatFormFieldModule,
    MatExpansionModule,
    MatChipsModule,
  ],
  declarations: []
})
export class MaterialModule { }
