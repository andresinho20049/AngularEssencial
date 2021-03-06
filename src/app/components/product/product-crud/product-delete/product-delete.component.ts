import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  product:Product = {
    id:0,
    name: '',
    price: 0.00
  };

  constructor(private productService:ProductService, private route:Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(p => {
      this.product = p;
    })
  }

  deleteProduct():void{
    this.productService.delete(this.product.id).subscribe(p => {
      this.productService.showMessage("Produto deletado com sucesso!");
      this.route.navigate(['/products']);
    })
  }

  cancel():void{
    this.route.navigate(['/products'])
  }

}
