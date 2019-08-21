import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> ceffa79f80fc7f063f13973104625fa6ffbacd16
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
