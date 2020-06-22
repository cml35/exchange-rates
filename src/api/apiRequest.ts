import { getExchangeRateUrl } from './helper/getExchangeRateUrl';

export const apiRequest = async (baseCurrency: string, currency: string) => {
  return fetch(getExchangeRateUrl(baseCurrency, currency))
  .then(results => results.json())
  .then(data => {
    const arr = [];
    for (let [key] of Object.entries(data.rates)) {
      let obj = data.rates[key];
      let curr = obj[currency];
      //By default we set it to AUD
      if (typeof(curr) == 'undefined') {
        curr = obj['AUD'];
      }
      arr.push({'date': key, 'value': curr})
    }
    return arr;
  })
}
