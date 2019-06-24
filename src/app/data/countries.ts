import { Country } from '../models/country';
import { Currency } from '../models/currency';

export const COUNTRIES: Country[] = [
    {
        name: 'Iceland', currency: Currency.ISK,
        flagIcon: 'iceland.png',
        rss: 'https://www.ecb.europa.eu/rss/fxref-isk.html'
    },
    {
        name: 'Poland', currency: Currency.PLN,
        flagIcon: 'poland.png',
        rss: 'https://www.ecb.europa.eu/rss/fxref-pln.html'
    },
    {
        name: 'Czech Republic', currency: Currency.CZK,
        flagIcon: 'czech-republic.png',
        rss: 'https://www.ecb.europa.eu/rss/fxref-czk.html'
    },
    {
        name: 'Hungary', currency: Currency.HUF,
        flagIcon: 'hungary.png',
        rss: 'https://www.ecb.europa.eu/rss/fxref-huf.html'
    },
];