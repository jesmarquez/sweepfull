import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlacesComponent } from './places/places.component';

export const routes: Routes = [  
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'places',
    component: PlacesComponent
  }
];
