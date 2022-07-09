import { NextFunction, Request, Response, Router } from "express";
import htmlLogin from './views/login'
import { layout } from "./views/layout";
import rootWelcome from "./views/rootWelcome";
import rootLogin from "./views/rootLogin";
import protectedPage from "./views/protected";
import protectedLogin from "./views/protectedLogin";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

function requireAuth (req: Request, res: Response, next: NextFunction) {
    if (req.session && req.session.loggedIn) {
        next()
        return
    }
    res.status(403)
    res.send(protectedLogin())
}

const router = Router()

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) res.send(rootWelcome())
    else res.send(rootLogin())
})

router.get('/login', (req: Request, res: Response) => {
    res.send(htmlLogin())
})

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body

    if (email && password && email === 's@s' && password === 'pass') {
        req.session = { loggedIn: true }
        res.redirect('/')
    } else {
        res.send(layout('Error', `<div>Invalid email and/or password!</div>`))
    }
})

router.get('/logout', (req: RequestWithBody, res: Response) => {
    req.session = undefined
    res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send(protectedPage())
})

export { router }