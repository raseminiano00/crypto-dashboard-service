"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.TokenController = void 0;
const axios = __importStar(require("axios"));
class TokenController {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.axiosClient = axios.default.create({
            headers: {
                'Content-type': 'application/json'
            }
        });
    }
    getTokenCurrentDetails(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const apiUrl = "https://api.coingecko.com/api/v3/coins/smooth-love-potion?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false";
            const apiResponse = yield this.axiosClient.get(apiUrl);
            const result = this.tokenService.getTokenCurrentDetails(apiResponse);
            return response.send(result);
        });
    }
}
exports.TokenController = TokenController;
