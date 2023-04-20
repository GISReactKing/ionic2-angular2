// add page decorater from ionic2 and NavController, and NavParams
import {Page, NavController, NavParams} from 'ionic-framework/ionic';

// decorate the page with templateUrl

@Page({
  templateUrl: 'build/pages/listPage/listPage.html'
})
export class ListPage{
  constructor(navParams: NavParams){ // inject NavParams
    this.items = navParams.get('items'); // retrieve data from NavParams
  }
}
