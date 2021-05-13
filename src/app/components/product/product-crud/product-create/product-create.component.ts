import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id:0,
    name: '',
    price: 0
  };

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    
  }

  createProduct():void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso');
      this.router.navigate(['/products']);
    })
    
  }

  cancel():void{
    this.router.navigate(['/products']);
  }



}
