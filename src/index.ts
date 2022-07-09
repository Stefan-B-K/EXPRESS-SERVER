import express, { Request, Response } from 'express'
import { router } from "./routes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(cookieSession({ keys: ['sdejlspo4g6sdsi9r07jgdf44dl3d5gh74hf84'] }))
server.use(express.static('./build'))
server.use(router)

server.listen(3000, () => console.log('Express running and listening on port 3000 ...'))