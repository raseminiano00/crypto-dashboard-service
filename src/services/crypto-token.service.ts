import { ITokenCurrentDetail } from "../models/token.model";
import { TokenHelper } from "../shared/helpers/token.helper"

export class CryptoTokenService {
    getTokenCurrentDetails(apiResponse: any): ITokenCurrentDetail {
        const responseData = apiResponse.data;
        return { name: responseData.name, image: responseData.image.small, currentPrice: TokenHelper.extractFiatCurrentPrice("php", responseData.market_data), fiatSymbol: "php" }
    }
}