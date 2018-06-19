import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dash',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  list: AngularFireList<any>;
  listingObservable: Observable<any[]>;
  listing: any;
  flag: boolean;

 constructor(private db: AngularFireDatabase) {
   this.list = this.db.list('listing');
  }

 ngOnInit() {
   this.listingObservable = this.getListing();

   this.listingObservable = this.list.snapshotChanges().pipe(
    map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  );
  this.flag = false;

 }

 addNew(name: string, last: string, number: number) {
   this.db.list('listing').push({firstname: name, lastname: last, phone: number});
   this.flag = false;
 }

 getListing() {
   return this.db.list('listing').valueChanges();
 }

  deleteMe(key: string) {
    this.list.remove(key);
  }


  filterList(key: string) {
    const p = this.db.list('/listing', ref => ref.orderByChild('lastname').equalTo(key));
    p.valueChanges().subscribe(res => this.listing = res);
    this.flag = true;
    if (key === '') {
     this.flag = false;
     }

  }

}
