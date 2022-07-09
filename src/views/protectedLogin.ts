import { layout } from "./layout";

export default () => {
    return layout('Error',
        ` <div>
                  <h2>Access denied!</h2>
                  <a href="/login">Login</a> to peek inside!
            </div>
        `
    )
}