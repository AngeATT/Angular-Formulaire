import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule //module responsable d'exposer les directives ngModule etc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
