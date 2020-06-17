import { getFormattedDate } from './getFormattedDate';

export const getExchangeRateUrl = (currency, comparecurrency) => {
  let url = 'https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=' + getFormattedDate();

  if (currency) {
    url = url + '&base=' + currency;
  }

  if (comparecurrency) {
    url += '&symbols=' + comparecurrency;
  }

  //By default we set it to AUD
  if (typeof(comparecurrency) == 'undefined' && typeof(currency) == 'undefined') {
    url += '&base=AUD&symbols=AUD';
  }
  return url;
}
