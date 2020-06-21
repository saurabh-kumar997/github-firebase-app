// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // firebase config
  firebaseConfig: {
    apiKey: 'AIzaSyCflpTpVRMxsnCsWGXlvsbg6TtOtb5TCbc',
    authDomain: 'github-searcher-app.firebaseapp.com',
    databaseURL: 'https://github-searcher-app.firebaseio.com',
    projectId: 'github-searcher-app',
    storageBucket: 'github-searcher-app.appspot.com',
    messagingSenderId: '623609834828',
    appId: '1:623609834828:web:30ce9da3c4cff94be6f3e9',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
