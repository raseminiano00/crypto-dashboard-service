"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenHelper = void 0;
class TokenHelper {
    static extractFiatCurrentPrice(fiatSymbol, marketData) {
        return marketData.current_price[fiatSymbol];
    }
}
exports.TokenHelper = TokenHelper;
