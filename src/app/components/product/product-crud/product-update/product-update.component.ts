import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    id:0,
    name: '',
    price: 0
  };

  constructor(private productService: ProductService, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.product = product;
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
