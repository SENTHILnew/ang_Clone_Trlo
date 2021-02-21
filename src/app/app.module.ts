import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponentComponent } from './main-view-component/main-view-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { PopupComponent } from './popup/popup.component';
import { SortableModule } from 'ngx-bootstrap/sortable';
@NgModule({
  declarations: [
    AppComponent,
    MainViewComponentComponent,
    HeaderComponentComponent,
    ContentComponentComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    SortableModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
