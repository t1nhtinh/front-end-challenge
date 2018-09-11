import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from "@clr/angular";
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { EnrollmentGoalComponent } from './enroll-goal/enroll-goal.component';
import { ActiveEnrollmentComponent } from './active-enroll/active-enroll.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ChartsModule 

  ],
  declarations: [
    HeaderComponent,
    SideNavComponent,
    EnrollmentGoalComponent,
    ActiveEnrollmentComponent,

],
  exports: [
    CommonModule,
    HeaderComponent,
    SideNavComponent,
    EnrollmentGoalComponent,
    ActiveEnrollmentComponent,
    
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}
