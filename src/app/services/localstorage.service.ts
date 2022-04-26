import { Injectable } from '@angular/core';

declare var db: any;
@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  public storageName = "name";
  constructor() { }

  // add and update both in one function 
  add(keyname: any, value: any) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db.transaction([this.storageName], "readwrite")
          .objectStore(this.storageName).put(value, keyname);

        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log("success");
            resolve("success");
          } else {
            console.log("errorr");
            resolve(false);
          }
        };
      }
    });
  }

  // get data from indexedDB
  get(keyname: any) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {

        const request = await db.transaction([this.storageName], "readwrite")
          .objectStore(this.storageName).get(keyname);

        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log("success");
            resolve("success");
          } else {
            console.log("errorr");
            resolve(false);
          }
        };
      }
    });
  }

  // delete data from indexedDB
  delete(keyname: any) {
    return new Promise(async (resolve, reject) => {
      if (db != undefined) {
        const request = await db.transaction([this.storageName], "readwrite")
          .objectStore(this.storageName).delete(keyname);

        request.onsuccess = await function (event: any) {
          if (event.target.result) {
            console.log("success");
            resolve("success");
          } else {
            console.log("errorr");
            resolve(false);
          }
        };
      }
    });
  }

}
