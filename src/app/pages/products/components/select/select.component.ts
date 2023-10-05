import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  products: Product[] = [];
  available: Product[] = [];
  not_available: Product[] = [];

  completed: boolean = false;
  error: boolean = false;

  constructor(private api: ApiService) {
    this.api.getAllProducts().subscribe(res => {
      this.products = [...res.products];
      res.products.forEach(item => {
        if(item.availability) {
          this.available.push(item);
        } else {
          this.not_available.push(item);
        }
      })
    })
  }

  drop(event: CdkDragDrop<Product[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  save() {
    var toSend: Product[] = [];
    this.available.forEach(x => {
      var found = this.products.find(item => item.id === x.id);
      if(found != undefined && found.availability != x.availability) toSend.push(x);
    });
    this.not_available.forEach(x => {
      var found = this.products.find(item => item.id === x.id);
      if(found != undefined && found.availability != x.availability) toSend.push(x);
    });
    toSend.forEach(x => this.api.modifyProduct(x).subscribe(res => {if(!res.success) this.error = true}));
    this.completed = true;

  }

}
