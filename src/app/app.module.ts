import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav/nav.component';
import { RobotSimulatorComponent } from './robot-simulator/robot-simulator/robot-simulator.component';
import { FormsModule } from '@angular/forms';
import { LoadingInterceptor } from './_interceptor/loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RobotSimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
