import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { FooterComponent } from '../footer/footer.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

export const APP_ROUTE: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
