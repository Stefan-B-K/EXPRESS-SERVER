import { layout } from "./layout";
import { Routes} from "../controllers/Routes";

export const htmlRootWelcome = () => {
    return layout('Express server & TypeScript',
        `
          <div class="centered">
              <h1>Welcome to my Express server<br>with TypeScript demo</h1>
              <img src="/assets/pug.jpg" style="margin: 10px auto" height="200" alt="">
               <div class="card">
                   <div><a href="${Routes.secret}">Top Secret</a></div>
                   <div><a href="${Routes.logout}">Logout</a></div>
               </div>
         </div>
      `
    )
}