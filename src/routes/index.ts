import { Express } from "express";
import { IRoute } from "../models/controllers.model";
import { TokenRoutes } from "./token.route";

export class Routes {
    routes: IRoute[] = [];
    constructor(private app: Express) {
    }

    initializeRoutesInstances() {
        //instantiate routes here
        this.routes.push(new TokenRoutes());

        //add routes instances into app
        for (let routeInstance of this.routes) {
            routeInstance.initializeRoute(this.app);
        }
    }
}