import { layout } from "./layout";

export default () => {
    return layout('Protected Area',
        `
          <div class="centered">
              <h2>Some private stuff here</h2>
              <img src="http://kevinrkosar.com/wordpress/wp-content/uploads/2015/10/GAO-Top-Secret.jpg" style="margin: 10px auto" width="250" alt="">
               <div class="card">
                   <div><a href="/">Home</a></div>
                   <div><a href="/logout">Logout</a></div>
               </div>
         </div>
      `
    )
}