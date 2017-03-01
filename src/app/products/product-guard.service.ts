import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
/**
 * Created by meryanyels on 1/03/17.
 */

@Injectable()
export class ProductDetailGuard implements CanActivate {

  constructor(private _router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if(isNaN(id) || id < 1){
      alert('Invalid product id');
      // start a new navigation to redirect to list page
      this._router.navigate(['/products']);
      // abort current navigation
      return false;
    }
    return true;
  }
}
