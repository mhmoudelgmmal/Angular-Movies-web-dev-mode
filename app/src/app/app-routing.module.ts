import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SinglemovieComponent } from './singlemovie/singlemovie.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',redirectTo:'movies',pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'movies', canActivate:[AuthGuard],component:MoviesComponent},
  {path:'singlemovie/:id/:title', canActivate:[AuthGuard],component:SinglemovieComponent},

  {path:'settings',canActivate:[AuthGuard], loadChildren:()=>import("./settings/settings.module").then(x=>x.SettingsModule)},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'**',component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],





exports: [RouterModule]
})
export class AppRoutingModule { }
