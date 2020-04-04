
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlateformRoutes } from './plateform.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../../components/components.module';
import { PlateformComponent } from './plateform.component';
import { ContainersComponent } from '../../ui-project/home/containers.component';
import {MatTooltipModule, MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatCheckboxModule} from '@angular/material';
import { SandboxesComponent } from '../../ui-project/benefactor/sandboxes.component';

import { ApiDocsComponent } from '../../ui-project/api-docs/api-docs.component';
import { ApiTokensComponent } from '../../ui-project/api-tokens/api-tokens.component';
import { ImagesComponent } from '../../ui-project/contact/images.component';
import { VolumesComponent } from '../../ui-project/kadya/volumes.component';
import { UsersComponent } from '../../ui-project/volunteer/users.component';
import { MatTableModule } from '@angular/material' 
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(PlateformRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    ChartsModule,
    MatTableModule
  ],
  declarations: [
    PlateformComponent,
    ContainersComponent,
    SandboxesComponent,
   
    ApiDocsComponent,
    ApiTokensComponent,
    ImagesComponent,
    VolumesComponent,
  
    UsersComponent
  ]
})
export class PlateformModule { }