import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViniComponent } from './components/vini/vini.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"", component: AppComponent},
  {path:"cesura", component: ViniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
