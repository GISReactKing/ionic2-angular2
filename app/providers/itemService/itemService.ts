// services to be injected throughout app use Angular2 Injectable service
import {Injectable} from 'angular2/core';

// add decorator to tell angular2 that this is Injectable that will be provider
@Injectable()
export class ItemService{
  items = ['this', 'is', 'the', 'provider'];

  // get method for service
  get(){
    return this.items;
  }

  // add item for service
  addItem(item){
    this.items.push(item);
  }

  //removeItem for service
  removeItem(index){
    this.items.splice(index, 1);
  }
}
