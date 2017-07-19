import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DatabaseService {

  constructor() { }

  // Returns an observable stream of an array of the current user's musical boxes
  public $myMusicalBoxList() {
    // TODO!!
    return new Observable((observer)=> {
      observer.next([])
    })
  }

  // Returns an observable stream of an array of all the public musical boxes
  public $publicMusicalBoxList() {
    // TODO!!
    return new Observable((observer)=> {
      observer.next([])
    })
  }

  // Returns an observable stream of the updated Box
  public $updateBox(newBox){
    // TODO!!
    return new Observable((observer) => {
      observer.next({
        success: {
          box: newBox
        }
      });
    })
  }

  // Returns an observable stream of the added box
  public $addBox(newBox){
    // TODO!!
    return new Observable((observer) => {
      observer.next({
        success: {
          box: newBox
        }
      });
    })
  }
}

