import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FormularioComponent } from './Formulario/formulario.component';


const routes: Routes = [
  {path:'',redirectTo: '/BodyComponent',pathMatch: 'full'},
  {path:'appComponent',component:AppComponent},
  {path:'BodyComponent',component: BodyComponent},
  {path:'FormularioComponent', component: FormularioComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
