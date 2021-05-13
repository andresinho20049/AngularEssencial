import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductCreateComponent } from './components/product/product-crud/product-create/product-create.component';
import { ProductCrudComponent } from './components/product/product-crud/product-crud.component';
import { ProductDeleteComponent } from './components/product/product-crud/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-crud/product-update/product-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
