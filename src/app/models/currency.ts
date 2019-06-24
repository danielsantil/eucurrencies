export enum CurrencyCode {
    EUR = 'EUR',
    CZK = 'CZK',
    HUF = 'HUF',
    ISK = 'ISK',
    PLN = 'PLN',
}

export class Currency {
    static CZK = new Currency(CurrencyCode.CZK, 'Czech Koruna');
    static HUF = new Currency(CurrencyCode.HUF, 'Hungarian Forint');
    static ISK = new Currency(CurrencyCode.ISK, 'Icelandic Króna');
    static PLN = new Currency(CurrencyCode.PLN, 'Polish złoty');

    private constructor(public readonly code: CurrencyCode,
        public readonly description: string) { }
}