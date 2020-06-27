import { Component } from '@angular/core';
import { Refresher } from 'ionic-angular';
import { MockProvider } from '../../pages/about/provider';

@Component({
  templateUrl: 'page-one.html'
})
export class PageOne {
  items: string[];

  constructor(private mockProvider: MockProvider) {
    this.items = mockProvider.getData();
  }

  doRefresh(refresher: Refresher) {
    console.log('DOREFRESH', refresher);

    this.mockProvider.getAsyncData().then((newData) => {
      for (var i = 0; i < newData.length; i++) {
        this.items.unshift( newData[i] );
      }

      refresher.complete();
    });
  }

  doPulling(refresher: Refresher) {
    console.log('DOPULLING', refresher.progress);
  }
}