// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAycD4POojgTGe6xNmkuOQZNTcK2ubMIWQ",
    authDomain: "eternal-luck.firebaseapp.com",
    projectId: "eternal-luck",
    storageBucket: "eternal-luck.appspot.com",
    messagingSenderId: "1081104949053",
    appId: "1:1081104949053:web:41ddbb87c024d572da2f54",
    measurementId: "G-5FTKZDR9Z7"
  },
  database: 'firebase',
  socialAuthEnabled: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
