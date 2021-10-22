"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoTokenService = void 0;
const token_helper_1 = require("../shared/helpers/token.helper");
class CryptoTokenService {
    getTokenCurrentDetails(apiResponse) {
        const responseData = apiResponse.data;
        return { name: responseData.name, currentPrice: token_helper_1.TokenHelper.extractFiatCurrentPrice("php", responseData.market_data), fiatSymbol: "php" };
    }
}
exports.CryptoTokenService = CryptoTokenService;
