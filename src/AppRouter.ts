import { Router } from "express";

export class AppRouter {
    private static init:  Router

    static get instance(): Router {
        if (!AppRouter.init) AppRouter.init = Router()
        return AppRouter.init
    }
}