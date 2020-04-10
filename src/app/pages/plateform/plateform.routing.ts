import { Routes } from '@angular/router';

import { PlateformComponent } from './plateform.component';
import { ContainersComponent } from '../../ui-project/home/containers.component';
import { SandboxesComponent } from '../../ui-project/benefactor/sandboxes.component';

import { ApiDocsComponent } from '../../ui-project/api-docs/api-docs.component';
import { ApiTokensComponent } from '../../ui-project/api-tokens/api-tokens.component';
import { ImagesComponent } from '../../ui-project/contact/images.component';
import { VolumesComponent } from '../../ui-project/kadya/volumes.component';
import { UsersComponent } from '../../ui-project/volunteer/users.component';
import { DashboardComponent } from 'src/app/ui-project/dashboard/dashboard.component';
import { NotfoundComponent } from 'src/app/ui-project/notfound/notfound.component';

export const PlateformRoutes: Routes = [
  { path: '', component: PlateformComponent, children: [
    { path: '', component: ContainersComponent },
    { path: 'benefactor', component: SandboxesComponent },
  
    { path: 'contact', component: ImagesComponent },
    { path: 'kadya', component: VolumesComponent },
   { path: 'volunteer', component: UsersComponent },
   { path: 'admin', component: DashboardComponent },
   { path: '**', component: NotfoundComponent },
  ],
},

];
