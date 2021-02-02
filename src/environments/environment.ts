// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  bloombergApiUrl: 'https://bloomberg-market-and-financial-news.p.rapidapi.com',
  bloombergRapidApiKey: 'rapidapi-key=e945b61393msh34694ffb92a9decp1dc310jsn5cb8a620cfa8',
  metalsApiUrl: 'https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL',
  currencyApiUrl: 'https://currency-converter5.p.rapidapi.com/currency/convert'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
