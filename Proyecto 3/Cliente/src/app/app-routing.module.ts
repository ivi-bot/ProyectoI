import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { ValidateComponent } from './validate/validate.component';
import { AdoptanteComponent } from './adoptante/adoptante.component';
import { FiltroComponent } from './filtro/filtro.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PrincipalfundacionComponent } from './principalfundacion/principalfundacion.component';
import { SplashComponent } from './splash/splash.component';
import { MascotasAdoptanteComponent } from './mascotas-adoptante/mascotas-adoptante.component';
import { InformacionmascotaComponent } from './informacionmascota/informacionmascota.component';


const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "validate/:id", component: ValidateComponent },
    { path: "principal", component: PrincipalComponent },
    { path: "adoptante", component: AdoptanteComponent },
    { path: "filtro", component: FiltroComponent },
    { path: "informacion/:id/:id2", component: InformacionComponent },
    { path: "principalfundacion", component: PrincipalfundacionComponent },
    { path: "splash", component: SplashComponent },
    {path:"mascotasadoptante/:id",component:MascotasAdoptanteComponent},
    {path:"informacionmascota",component:InformacionmascotaComponent},

    { path: "**", redirectTo: "splash" }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }