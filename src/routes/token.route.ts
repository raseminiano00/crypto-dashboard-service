import { Express, Request, Response } from "express";
import { TokenController } from "../controller/token.controller"
import { IRoute } from "../models/controllers.model";
import { CryptoTokenService } from "../services/crypto-token.service";

export class TokenRoutes implements IRoute {
    private tokenService = new CryptoTokenService();
    private tokenController = new TokenController(this.tokenService);

    initializeRoute(app: Express): void {
        app.get('/token/currentDetail', async (request: Request, response: Response) => {
            return await this.tokenController.getTokenCurrentDetails(request, response);
        });
    }

}