// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
// Initialize Firebase
  config: {
    apiKey: 'AIzaSyBYNVP4qhntgrkSV0Mg6FTwgPuPbAhhtvE',
    authDomain: 'pdg-listing-dbase.firebaseapp.com',
    databaseURL: 'https://pdg-listing-dbase.firebaseio.com',
    projectId: 'pdg-listing-dbase',
    storageBucket: 'pdg-listing-dbase.appspot.com',
    messagingSenderId: '313072083209'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
