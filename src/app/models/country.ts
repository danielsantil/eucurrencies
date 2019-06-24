import { Currency } from './currency';
import { Rate } from './rate';

export class Country {
    name: string;
    currency: Currency;
    /**Remember to add the corresponding icon in /assets/flags folder. 
     * Icons site: https://www.flaticon.com/search?word=poland&style_id=141
    */
    flagIcon: string;
    rss: string;
    rate?: Rate;
}