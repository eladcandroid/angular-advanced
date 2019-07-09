import { Component, ɵrenderComponent } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="border: 10px solid green; padding: 10px;">
      <button (click)="loadFeature()">Load Feature</button>
    </div>
    <feature></feature>
  `
})
export class AppComponent {
  loadFeature() {
    import('./feature/feature.component').then(({ FeatureComponent }) => {
      ɵrenderComponent(FeatureComponent);
    });
  }
}
