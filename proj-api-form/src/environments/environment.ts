// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  urlApiViaCEP: 'https://viacep.com.br/ws/',
  urlApiIBGE: 'https://servicodados.ibge.gov.br/api/v1/localidades/',
  loginUser: 'fernando',
  passUser: '123456',
  firebaseConfig: {
    apiKey: "AIzaSyB13DrRjjCMmw0W9gy-n2ZKwSCZnauC4-g",
    authDomain: "proj-api-form-fernando.firebaseapp.com",
    projectId: "proj-api-form-fernando",
    storageBucket: "proj-api-form-fernando.appspot.com",
    messagingSenderId: "131276423984",
    appId: "1:131276423984:web:84eaca2848fbcff2b3bef5",
    measurementId: "G-ECTHWL8VTR"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
