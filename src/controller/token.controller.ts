import * as axios from "axios";
import { AxiosInstance } from "axios";
import { Response, Request } from "express";
import { CryptoTokenService } from "../services/crypto-token.service";


export class TokenController {
    axiosClient: AxiosInstance;
    constructor(private tokenService: CryptoTokenService) {
        this.axiosClient = axios.default.create({
            headers: {
                'Content-type': 'application/json'
            }
        });
    }
    async getTokenCurrentDetails(request: Request, response: Response): Promise<Response> {
        console.log(request);
        const apiUrl = "https://api.coingecko.com/api/v3/coins/smooth-love-potion?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false";
        const apiResponse = await this.axiosClient.get(apiUrl);
        const result = this.tokenService.getTokenCurrentDetails(apiResponse);
        return response.send(result);
    }
}