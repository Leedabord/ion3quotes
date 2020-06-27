import { Component } from '@angular/core';
import { NavController, ToastController, Refresher } from 'ionic-angular';
import { MockProvider } from './provider';

let pageNum = 1;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  pageNum = pageNum;
  items: string[];

  constructor(
    public navCtrl: NavController, 
    private toastCtrl: ToastController, 
//    private mockProvider: MockProvider
    )  {
//    this.items = mockProvider.getData();
    console.log('Done::constructor:: ', this.items);
  }

  push() {
    pageNum++;
    this.navCtrl.push(AboutPage);
  }

  pop() {
    if (pageNum > 2) {
      pageNum--;
    }
    this.navCtrl.pop();
  }

  showToast(position: string) {
    const toast = this.toastCtrl.create({
      message: 'User was created successfully',
      position: position,
      duration: 3000
    });

    toast.onDidDismiss(this.dismissHandler);
    toast.present();
  }

  showLongToast() {
    const toast = this.toastCtrl.create({
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
      duration: 3000
    });

    toast.onDidDismiss(this.dismissHandler);
    toast.present();

//    this.showToast('top');
  }

  showDismissDurationToast() {
    const toast = this.toastCtrl.create({
      message: 'I am dismissed after 1.5 seconds',
      duration: 1500
    });
    toast.onDidDismiss(this.dismissHandler);
    toast.present();
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Your internet connection appears to be offline. Data integrity is not guaranteed.',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.onDidDismiss(this.dismissHandler);
    toast.present();
  }

  private dismissHandler() {
    console.info('Toast onDidDismiss()');
  }

}
