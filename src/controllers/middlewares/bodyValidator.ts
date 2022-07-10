import { NextFunction, Request, Response } from "express";
import { layout } from "../../views";
import { FormProps } from "../decorators/FormProps";

export function bodyValidator (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
        res.status(422).send(layout('Error', `<div>Invalid request!</div>`))
        return
    }
    for (let value in FormProps) {
        if (!req.body[value]) {
            res.status(422).send(layout('Error', `<div>Missing form data ${value}</div>`))
            return
        }
    }
    next()
}