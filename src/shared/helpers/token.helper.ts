export class TokenHelper {
    public static extractFiatCurrentPrice(fiatSymbol: string, marketData: any) {
        return marketData.current_price[fiatSymbol];
    }
}