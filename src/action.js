/**
 * Action Types
 */
export const REORDER = 'REORDER';
export const SET_RATES = 'SET_RATES';
export const SET_DATE = 'SET_DATE';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_SECOND_CURRENCY = 'SET_SECOND_CURRENCY';

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

export function setCurrency(id, currency)
{
    if (id == 2) {
        return {
            type: SET_SECOND_CURRENCY,
            currency,
        }
    }
    
    return {
        type: SET_CURRENCY,
        currency,
    }
}