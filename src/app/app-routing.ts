import { LoginComponent } from './pages/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthLoginGuard } from './_guards/auth.login.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'login', component: LoginComponent, canActivate: [AuthLoginGuard] },
];


export const routing = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
