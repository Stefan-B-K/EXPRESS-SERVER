import express from 'express'
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import './controllers/RouteController'
import { AppRouter} from "./AppRouter";

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(cookieSession({ keys: ['sdejo4g6sdhf84'] }))
server.use(express.static('public'))
server.use(AppRouter.instance)

server.listen(3002, () => console.log('Express running and listening on port 3002 ...'))