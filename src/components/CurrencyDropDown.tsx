import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import currenciesArray from '../constants/currencies';

interface CurrencyDropDownProps {
  currency: string;
  setCurrency: Function;
  base?: boolean;
}

export default function CurrencyDropDown({ currency, setCurrency }: CurrencyDropDownProps) {
  const getMenuItems = () => {
    return currenciesArray.map((currency) => <MenuItem value={currency}>{currency}</MenuItem>)
  }
  
  return (
    <Select
      value={currency}
      onChange={(event) => setCurrency(event.target.value)}
    >
      {getMenuItems()}
    </Select>
  );
};



