import { layout } from "./layout";

export const htmlSecretLogin = () => {
    return layout('Error',
        ` <div>
                  <h2>Access denied!</h2>
                  <a href="/login">Login</a> to peek inside!
            </div>
        `
    )
}