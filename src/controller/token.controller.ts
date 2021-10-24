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
        const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${request.query.fiat}&ids=${request.query.ids}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
        const apiResponse = await this.axiosClient.get(apiUrl);
        const result = this.tokenService.getTokenCurrentDetails(apiResponse, request.query.fiat as string);
        return response.send(result);
    }
}