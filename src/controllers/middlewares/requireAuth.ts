import { NextFunction, Request, Response } from "express";
import { htmlSecretLogin } from "../../views";

export function requireAuth (req: Request, res: Response, next: NextFunction) {
    if (req.session && req.session.loggedIn) {
        next()
        return
    }
    res.status(403).send(htmlSecretLogin())
}

