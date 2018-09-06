import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GraphComponent } from './graph/graph.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { ProductActions } from './actions/productActions';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgReduxModule,
  ],
  providers: [ProductService, ProductActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<any>) {
    ngRedux.configureStore(rootReducer, {}, [ thunk ], []);
  }
}
