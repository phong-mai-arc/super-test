import { Routes } from '@angular/router';
import { AppComponent as FMSComponent } from '../../fms/src/app/app.component';
import { AppComponent as HISComponent } from '../../his/src/app/app.component';

export const routes: Routes = [
  {
    title: 'FMS',
    path: 'fms',
    component: FMSComponent,
  },
  {
    title: 'HIS',
    path: 'his',
    component: HISComponent,
  }
];
