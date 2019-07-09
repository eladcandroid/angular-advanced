import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
// NOT LAZY LOADING
// import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent
  },
  // NOT LAZY LOADING
  //   {
  //     path: 'feature',
  //     children: [{ path: '', component: FeatureComponent }]
  //   }
  // LAZY LOADING
  {
    path: 'feature',
    // ANOTHER SYNTAX:
    // loadChildren: './feature/feature.module#FeatureModule'
    loadChildren: () =>
      import('./feature/feature.module').then(mod => mod.FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
