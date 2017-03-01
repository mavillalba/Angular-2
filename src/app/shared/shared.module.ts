import {NgModule} from "@angular/core";
import {StarComponent} from "./star.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
/**
 * Created by meryanyels on 1/03/17.
 */

@NgModule({
  declarations: [StarComponent],
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent
  ]
})
export class SharedModule {

}
