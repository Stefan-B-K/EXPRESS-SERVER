import { layout } from "./layout";

export default () => {
    return layout('Express server & TypeScript',
        `
          <div class="centered">
              <h1>Welcome to my Express server<br>with TypeScript demo</h1>
              <img src="https://i2-prod.walesonline.co.uk/news/uk-news/article23988338.ece/ALTERNATES/s1200b/0_Pug-1.jpg" style="margin: 10px auto" height="200" alt="">
               <div class="card">
                   <div><a href="/protected">Top Secret</a></div>
                   <div><a href="/logout">Logout</a></div>
               </div>
         </div>
      `
    )
}