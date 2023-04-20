import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {ListPage} from '../listPage/listPage';
import {ItemService} from '../../providers/itemService/itemService';


@Page({
  providers:[ItemService], //inject provider service to page
  templateUrl: 'build/pages/newPage/newPage.html'
})
export class newPage {

   title = "new Super page";
   nav;
   items;

   // dependency injection into the constructor functtion, inject itemService
   constructor(nav: NavController, navParams: NavParams, itemService: ItemService){
     this.nav = nav;
    this.items = itemService.get();
   }

   addPage(){
     this.nav.push(ListPage, {items: this.items}); // 2nd param is data to pass as object to page
   }
}
