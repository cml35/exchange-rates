/**
 * Action Types
 */
export const REORDER = 'REORDER';
export const SET_RATES = 'SET_RATES';
export const SET_DATE = 'SET_DATE';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';

export function setRates(results) 
{
    return {
        type: SET_RATES,
        results
    }
}

export function reOrder(order) 
{
    return {
        type: REORDER,
        order
    }
}

export function setSpecificDate(date) 
{
    return {
        type: SET_DATE,
        date
    }
}

export function setCurrency(currency)
{
    return {
        type: SET_CURRENCY,
        currency,
    }
}

export function setBaseCurrency(baseCurrency)
{
    return {
        type: SET_BASE_CURRENCY,
        baseCurrency,
    }
}