import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LoginModule } from './pages/login/login.module';
import { PlateformModule } from './pages/plateform/plateform.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DashboardComponent } from './ui-project/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotfoundComponent } from './ui-project/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotfoundComponent,
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    PlateformModule,
    LoginModule,
    ComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    FormsModule, 
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
