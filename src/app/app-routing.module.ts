import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginpageComponent},
  {path: 'products', component: ProductsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
