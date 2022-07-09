import { layout } from "./layout";

export default () => {
    return layout('Express login',
        `
             <form method="post">
                <div class="inputs">
                      <label>Email</label>
                      <input name="email"  type="email" readonly onfocus="this.removeAttribute('readonly');"/>
                </div>
                <div class="inputs">
                      <label for="password">Password</label>
                      <input name="name" type="password" readonly onfocus="this.removeAttribute('readonly');"/>
                </div>
                <button>Login</button>
            </form>  
        `
        )
}
