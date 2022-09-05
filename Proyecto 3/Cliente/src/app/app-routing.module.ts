import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PrincipalComponent } from './principal/principal.component';
import { ValidateComponent } from './validate/validate.component';
import { AdoptanteComponent } from './adoptante/adoptante.component';
import { FiltroComponent } from './filtro/filtro.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SplashComponent } from './splash/splash.component';
import { MascotasAdoptanteComponent } from './mascotas-adoptante/mascotas-adoptante.component';


const routes: Routes = [
    { path: "validate/:id", component: ValidateComponent },
    { path: "principal", component: PrincipalComponent },
    { path: "adoptante", component: AdoptanteComponent },
    { path: "filtro", component: FiltroComponent },
    { path: "informacion/:id/:id2", component: InformacionComponent },
    { path: "splash", component: SplashComponent },
    {path:"mascotasadoptante/:id",component:MascotasAdoptanteComponent},

    { path: "**", redirectTo: "splash" }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }