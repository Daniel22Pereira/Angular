import { Injectable } from '@angular/core';
import { Coin } from '../models/coin.model';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  private coins: Coin[];

  constructor() { }

  private coinsObj = [
    { "acronym": "USD", "description": "United States Dollar" },
    { "acronym": "BRL", "description": "Brazilian Real" },
    { "acronym": "EUR", "description": "Euro" },
    { "acronym": "ARS", "description": "Argentine Peso" },
    { "acronym": "QAR", "description": "Qatari Rial" },
    { "acronym": "BTC", "description": "Bitcoin" },
    { "acronym": "CAD", "description": "Canadian Dollar" },
    { "acronym": "CNY", "description": "Chinese Yuan" },
    { "acronym": "JPY", "description": "Japanese Yen" },
    { "acronym": "CHF", "description": "Swiss Franc" },
    { "acronym": "AUD", "description": "Australian Dollar" },
    { "acronym": "GBP", "description": "Pound Sterling" },
    { "acronym": "SEK", "description": "Swedish Krona" },
    { "acronym": "NOK", "description": "Norwegian Krone" },
    { "acronym": "ISK", "description": "Icelandic Krona" },
    { "acronym": "NZD", "description": "New Zealand Dollar" },
    { "acronym": "ZAR", "description": "South African Rand" },
    { "acronym": "RUB", "description": "Russian Ruble" },
    { "acronym": "KRW", "description": "South Korean Won" },
    { "acronym": "INR", "description": "Indian Rupee" },
    { "acronym": "MXN", "description": "Mexican Peso" },
    { "acronym": "SGD", "description": "Singapore Dollar" },
    { "acronym": "HKD", "description": "Hong Kong Dollar" },
    { "acronym": "IDR", "description": "Indonesian Rupiah" },
    { "acronym": "MYR", "description": "Malaysian Ringgit" },
    { "acronym": "THB", "description": "Thai Baht" },
    { "acronym": "PHP", "description": "Philippine Peso" },
    { "acronym": "DKK", "description": "Danish Krone" },
    { "acronym": "HUF", "description": "Hungarian Forint" },
    { "acronym": "CZK", "description": "Czech Koruna" },
    { "acronym": "ILS", "description": "Israeli New Shekel" },
    { "acronym": "PLN", "description": "Polish Zloty" },
    { "acronym": "AED", "description": "United Arab Emirates Dirham" },
    { "acronym": "TWD", "description": "New Taiwan Dollar" },
    { "acronym": "SAR", "description": "Saudi Riyal" },
    { "acronym": "KWD", "description": "Kuwaiti Dinar" },
    { "acronym": "TRY", "description": "Turkish Lira" },
    { "acronym": "EGP", "description": "Egyptian Pound" },
    { "acronym": "NPR", "description": "Nepalese Rupee" },
    { "acronym": "PKR", "description": "Pakistani Rupee" },
    { "acronym": "LKR", "description": "Sri Lankan Rupee" },
    { "acronym": "BDT", "description": "Bangladeshi Taka" },
    { "acronym": "KES", "description": "Kenyan Shilling" },
    { "acronym": "NGN", "description": "Nigerian Naira" },
    { "acronym": "GHS", "description": "Ghanaian Cedi" },
    { "acronym": "UGX", "description": "Ugandan Shilling" },
    { "acronym": "ZMW", "description": "Zambian Kwacha" },
    { "acronym": "MAD", "description": "Moroccan Dirham" },
    { "acronym": "DZD", "description": "Algerian Dinar" },
    { "acronym": "TND", "description": "Tunisian Dinar" },
    { "acronym": "LYD", "description": "Libyan Dinar" },
    { "acronym": "JOD", "description": "Jordanian Dinar" },
    { "acronym": "BHD", "description": "Bahraini Dinar" },
    { "acronym": "OMR", "description": "Omani Rial" },
    { "acronym": "YER", "description": "Yemeni Rial" },
    { "acronym": "SYP", "description": "Syrian Pound" },
    { "acronym": "IQD", "description": "Iraqi Dinar" },
    { "acronym": "KGS", "description": "Kyrgyzstani Som" },
    { "acronym": "KZT", "description": "Kazakhstani Tenge" },
    { "acronym": "UZS", "description": "Uzbekistani Som" },
    { "acronym": "TJS", "description": "Tajikistani Somoni" },
    { "acronym": "AZN", "description": "Azerbaijani Manat" },
    { "acronym": "AFN", "description": "Afghan Afghani" },
    { "acronym": "IRR", "description": "Iranian Rial" },
    { "acronym": "PKR", "description": "Pakistani Rupee" },
    { "acronym": "BDT", "description": "Bangladeshi Taka" },
    { "acronym": "LKR", "description": "Sri Lankan Rupee" },
    { "acronym": "NPR", "description": "Nepalese Rupee" },
    { "acronym": "PHP", "description": "Philippine Peso" },
    { "acronym": "IDR", "description": "Indonesian Rupiah" },
    { "acronym": "VND", "description": "Vietnamese Dong" },
    { "acronym": "KHR", "description": "Cambodian Riel" },
    { "acronym": "MMK", "description": "Myanmar Kyat" },
  ];

  listAll(): Coin[] {
    if (this.coins) {
      return this.coins;
    }

    this.coins = [];

    for (let coinObj of this.coinsObj) {
      let coin: Coin = new Coin();
      Object.assign(coin, coinObj);
      this.coins.push(coin);
    }

    return this.coins;
  }
}
