import express, { Request, Response } from 'express'
import { router } from "./loginRoutes";
import bodyParser from "body-parser";

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static('./build'))
server.use(router)

server.listen(3000, () => console.log('Express running and listening on port 3000 ...'))