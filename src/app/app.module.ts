import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {AlertModule} from "ng2-bootstrap";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductModule} from "./products/product.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AlertModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ], {useHash: true}),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
