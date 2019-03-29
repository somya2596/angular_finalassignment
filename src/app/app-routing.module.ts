import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import{BodyComponent} from './body/body.component';

const routes: Routes = [
  {path: '',  component: BodyComponent},
  {path: 'cart/:id', component: CartComponent},
  {path: 'cart', component: CartComponent},
  {path: 'body',  component: BodyComponent}];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CartComponent,BodyComponent]
