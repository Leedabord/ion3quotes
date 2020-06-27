import { NgModule } from '@angular/core';
import { IonicPageModule, Refresher } from 'ionic-angular';
import { MockProvider } from './provider';

import { AboutPage } from './about';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
  ],
  entryComponents: [
    AboutPage,
  ],
  providers: [
    MockProvider
  ]
})
export class AboutPageModule {}

/* 

*/