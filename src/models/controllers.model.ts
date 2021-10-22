import { Express } from "express";

export interface IRoute {
    initializeRoute(app: Express): void;
}