"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const token_route_1 = require("./token.route");
class Routes {
    constructor(app) {
        this.app = app;
        this.routes = [];
    }
    initializeRoutesInstances() {
        //instantiate routes here
        this.routes.push(new token_route_1.TokenRoutes());
        //add routes instances into app
        for (let routeInstance of this.routes) {
            routeInstance.initializeRoute(this.app);
        }
    }
}
exports.Routes = Routes;
