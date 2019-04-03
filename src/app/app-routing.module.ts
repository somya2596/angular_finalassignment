import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { HeroComponent } from './hero/hero.component';
import { CartComponent } from './cart/cart.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SellComponent } from './sell/sell.component';
import { FavouriteComponent } from './favourite/favourite.component';


const routes: Routes = [
  { path: 'Signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: '', component: HeroComponent },
  {path: 'cart/:id', component: CartComponent},
  {path: 'cart', component: CartComponent},
  {path: 'body',  component: BodyComponent},
  { path: 'sell', component: SellComponent },
  { path: 'favourite', component: FavouriteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CartComponent,DashboardComponent]
