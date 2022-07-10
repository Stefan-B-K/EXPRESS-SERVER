import { layout } from "./layout";

export const htmlRootLogin = () => {
    return layout('Express server & TypeScript',
        ` <div><a href="/login">Login</a> to enter the site!</div>`
    )
}