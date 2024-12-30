import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponents } from './footer/footer.component'; // Adjust path if needed
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeFeatureComponent } from './home-feature/home-feature.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, FooterComponents, HeaderComponent, WelcomeComponent, HomeFeatureComponent, WorkProcessComponent, LoginComponent, ContactComponent] // Add HeaderComponent here
})
export class AppComponent {}
