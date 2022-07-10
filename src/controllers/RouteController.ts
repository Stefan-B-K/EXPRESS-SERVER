import { Request, Response } from "express";
import { layout, htmlLogin, htmlRootWelcome, htmlRootLogin, htmlSecret } from "../views";
import { get, post, use, controller } from "./decorators";
import { Routes } from "./Routes";
import { requireAuth } from "./middlewares/requireAuth";
import { bodyValidator} from "./middlewares/bodyValidator";

@controller()
class RouteController {

    @get(Routes.root)
    getRoot (req: Request, res: Response) {
        if (req.session && req.session.loggedIn) res.send(htmlRootWelcome())
        else res.send(htmlRootLogin())
    }

    @get(Routes.login)
    getLogin (req: Request, res: Response): void {
        res.send(htmlLogin())
    }

    @post(Routes.login)
    @use(bodyValidator)
    postLogin (req: Request, res: Response): void {
        const { email, password } = req.body

        if (email === 's@s' && password === 'pass') {
            req.session = { loggedIn: true }
            res.redirect(Routes.root)
        } else {
            res.send(layout('Error', `<div>Invalid email and/or password!</div>`))
        }
    }

    @get(Routes.logout)
    getLogout (req: Request, res: Response) {
        req.session = undefined
        res.redirect(Routes.root)
    }

    @get(Routes.secret)
    @use(requireAuth)
    get (req: Request, res: Response) {
        res.send(htmlSecret())
    }

}