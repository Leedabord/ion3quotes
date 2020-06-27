import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PageOne } from './page-one';
import { MockProvider } from '../../pages/about/provider';

@NgModule({
  declarations: [
    PageOne,
  ],
  imports: [
    IonicPageModule.forChild(PageOne),
  ],
  entryComponents: [
    PageOne,
  ],
  providers: [
    MockProvider
  ]
})
export class PageOneModule {}
