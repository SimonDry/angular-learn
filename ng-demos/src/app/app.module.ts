import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { TemplateComponent } from './template/template.component';
import { ReciepeComponent } from './reciepe/reciepe.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import { ConvertComponent } from './convert/convert.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    TemplateComponent,
    ReciepeComponent,
    FormComponent,
    ConvertComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
