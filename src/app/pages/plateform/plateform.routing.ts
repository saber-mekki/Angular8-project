import { Routes } from '@angular/router';

import { PlateformComponent } from './plateform.component';
import { ContainersComponent } from '../../ui-project/home/containers.component';
import { SandboxesComponent } from '../../ui-project/benefactor/sandboxes.component';

import { ApiDocsComponent } from '../../ui-project/api-docs/api-docs.component';
import { ApiTokensComponent } from '../../ui-project/api-tokens/api-tokens.component';
import { ImagesComponent } from '../../ui-project/contact/images.component';
import { VolumesComponent } from '../../ui-project/kadya/volumes.component';
import { UsersComponent } from '../../ui-project/volunteer/users.component';

export const PlateformRoutes: Routes = [
  { path: '', component: PlateformComponent, children: [
    { path: 'containers', component: ContainersComponent },
    { path: 'sandboxes', component: SandboxesComponent },

    { path: 'api-docs', component: ApiDocsComponent },
    { path: 'api-tokens', component: ApiTokensComponent },
    { path: 'images', component: ImagesComponent },
    { path: 'volumes', component: VolumesComponent },
   { path: 'users', component: UsersComponent },

  ],
},

];
