"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRoutes = void 0;
const token_controller_1 = require("../controller/token.controller");
const crypto_token_service_1 = require("../services/crypto-token.service");
class TokenRoutes {
    constructor() {
        this.tokenService = new crypto_token_service_1.CryptoTokenService();
        this.tokenController = new token_controller_1.TokenController(this.tokenService);
    }
    initializeRoute(app) {
        app.get('/token/currentDetail', (request, response) => __awaiter(this, void 0, void 0, function* () {
            return yield this.tokenController.getTokenCurrentDetails(request, response);
        }));
    }
}
exports.TokenRoutes = TokenRoutes;
