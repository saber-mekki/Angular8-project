import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'auth', loadChildren: './pages/login/login.module#LoginModule' },
  { path: '', loadChildren: './pages/plateform/plateform.module#PlateformModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
