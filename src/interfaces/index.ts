export interface CurrencyData {
  id: number;
  currency_code: string;
  currency_name: string;
  country: string;
  decimal_places: number;
  symbol: string;
}

export interface UserData {
  token: string;
  first_name: string;
  last_name: string;
  email: string;
}
