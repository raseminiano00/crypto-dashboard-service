import { ITokenCurrentDetail } from "../../models/token.model";

export class TokenHelper {
    public static extractFiatCurrentPrice(fiatSymbol: string, marketData: any) {
        return marketData.current_price[fiatSymbol];
    }

    public static extractTokenDetailResponse(response: any, fiatSymbol: string): ITokenCurrentDetail {
        return {
            name: response.name,
            symbol: response.symbol,
            image: response.image,
            currentPrice: response.current_price,
            fiatSymbol: fiatSymbol
        }
    }
}