import { getExchangeRateUrl } from './helper/getExchangeRateUrl';

export const apiRequest = (currency, comparecurrency) => new Promise((resolve, reject) => {
  fetch(getExchangeRateUrl(currency, comparecurrency))
  .then(results => results.json())
  .then(data => {
    const arr = [];
    for (let [key] of Object.entries(data.rates)) {
      let obj = data.rates[key];
      let curr = obj[comparecurrency];
      //By default we set it to AUD
      if (typeof(curr) == 'undefined') {
        curr = obj['AUD'];
      }
      arr.push({'date': key, 'value': curr})
    }
    resolve(arr);
  })
  .catch(error => reject(console.log(error)))
})
