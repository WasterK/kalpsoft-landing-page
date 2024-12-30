import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: HomeFeatureComponent },
  { path: 'work-process', component: WorkProcessComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent }
];

