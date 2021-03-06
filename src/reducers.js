import { 
    REORDER,
    SET_RATES,
    SET_DATE,
    SET_CURRENCY,
    SET_BASE_CURRENCY
} from './action.js';
import { combineReducers } from 'redux';

const initialState = {
    order: 'ASC',
    results: [

    ],
    date: ''   
}

function exchangeRates(state = initialState, action) {
    switch (action.type) {
        case SET_RATES:
            return {
                    ...state,
                    results: action.results
            }
        case REORDER: 
            return {
                ...state,
                order: action.order
            }
        case SET_DATE: 
            return {
                ...state,
                date: action.date
            }
        case SET_CURRENCY:
            return {
                ...state,
                currency: action.currency
            }
        case SET_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.baseCurrency
            }
        default: 
            return state
    }
}

const exchangeRateApp = combineReducers({
    exchangeRates
})

export default exchangeRateApp;