import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PageViewComponent } from './component/page-view/page-view.component';
import { PageListComponent } from './component/page-list/page-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PageViewComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
