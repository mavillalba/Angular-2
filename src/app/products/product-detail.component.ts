/**
 * Created by mavillalba on 24/02/17.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "./product.service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy{
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
      let id = +params['id'];
      this.getProduct(id);
    });
    //let id = +this._route.snapshot.params['id'];
    //this.pageTitle += ': ${id}';
    //this.pageTitle += ': ' + id;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProduct(id: number){
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product Detail: ' + message;
  }
}
