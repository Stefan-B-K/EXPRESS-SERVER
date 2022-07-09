import { Request, Response, Router } from "express";
import htmlLogin from './views/login'
import { layout } from "./views/layout";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send(layout('Express server with typescript demo',
        `<h1>Welcome to my Express server<br>with TypeScript demo</h1>`))
})

router.get('/login', (req: Request, res: Response) => {
    res.send(htmlLogin())
})

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body
    if (!email) { res.send('Invalid post data!'); return }
    res.send(email.toUpperCase())
})

export { router }