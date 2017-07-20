import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DatabaseService {

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase
  ) { }

  // Returns an observable stream of an array of the current user's musical boxes
  public $myMusicalBoxList() {
    return new Observable((observer) => {
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          const uid = user.uid;
          this.afDatabase.list('players/' + uid).subscribe(boxList => {
            observer.next(boxList);
          })
        } else {
          observer.next([])
        }
      })
      observer.next([]);
    })
  }

  // Returns an observablestream of an array of all the public musical boxes
  public $publicMusicalBoxList() {
    return new Observable((observer) => {
      this.afDatabase.list('players/').subscribe(players => {
        const boxList = [];
        players.forEach(player => {
          Object.keys(player).map(key => player[key]).forEach( box => {
            boxList.push(box);
          })
        })
        observer.next(boxList);
      })
      observer.next([]);
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

