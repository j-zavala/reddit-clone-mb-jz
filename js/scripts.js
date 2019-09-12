// require("dotenv").config();

// require syntax
// const Unsplash = require("unsplash-js").default;

// const unsplash = new Unsplash({
//   applicationId: process.env.APP_ACCESS_KEY,
//   secret: process.env.APP_SECRET
// });

// console.log(userAuthentication(code));

// export function userAuthentication(code) {
//   return unsplash.auth
//     .userAuthentication(code)
//     .then(toJson)
//     .then(json => json.access_token);
// }
window.onload = function() {
  let id = "0984c448918c7679173694ae2737ab63ea485e7e738715dd5818ad1ab1b20752";

  fetch(`https://api.unsplash.com/photos/random?client_id=${id}`, {
    method: "GET",
    headers: {
      Authorization:
        "0984c448918c7679173694ae2737ab63ea485e7e738715dd5818ad1ab1b20752",
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      let viewport = document.getElementsByClassName("container");
      viewport.style.backgroundImage = res.urls.full;
    })
    .catch(err => {
      console.log(err);
    });
};
