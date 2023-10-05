import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent {

  products: Product[] = [];
  item: Product = {} as Product;
  selected: boolean = false;

  constructor(private api: ApiService) {
    this.api.getAllProducts().subscribe(res => this.products = res.products);
  }

  modifyProduct(item: Product) {
    this.item = item;
    this.selected = true;
  }

}
