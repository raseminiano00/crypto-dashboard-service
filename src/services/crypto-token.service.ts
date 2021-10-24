import { ITokenCurrentDetail } from "../models/token.model";
import { TokenHelper } from "../shared/helpers/token.helper"

export class CryptoTokenService {
    getTokenCurrentDetails(apiResponse: any, fiat: string): ITokenCurrentDetail[] {
        const responseData = apiResponse.data;
        const result: ITokenCurrentDetail[] = [];
        for (let data of responseData) {
            result.push(TokenHelper.extractTokenDetailResponse(data, fiat));
        }
        return result;
    }
}