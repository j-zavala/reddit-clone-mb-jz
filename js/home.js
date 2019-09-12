// Send data to database to get token.
function postData(event) {
  event.preventDefault();
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  const username = document.querySelector(".username");
  console.log(email.value, password.value, username.value);
  fetch("http://thesi.generalassemb.ly:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
      username: username.value
    })
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      localStorage.setItem("user", res.token);
      console.log(res.token);
      // signupUser();
    })
    .catch(err => {
      console.log(err);
    });
}
// function signupUser() {
//   let token = localStorage.getItem("user");
//   if (token) {
//     document.querySelector(".upForm").style.display = "none";
//     document.querySelector(".loginForm").style.display = "none";
//     document.querySelector(".accountOptions").style.display = "none";
//     document.querySelector(".postForm").style.display = "flex";
//     document.querySelector(".commentForm").style.display = "flex";
//   }
// }
function logUserIn(event) {
  event.preventDefault();
  // console.log("gege");
  let token = localStorage.getItem("user");
  if (token) {
    const email = document.querySelector("#emailInput");
    const password = document.querySelector("#passwordInput");
    console.log(email.value, password.value);
    document.querySelector(".signupForm").style.display = "none";
    document.querySelector(".postForm").style.display = "flex";
    document.querySelector(".commentForm").style.display = "flex";
    fetch("http://thesi.generalassemb.ly:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        localStorage.setItem("user", res.token), console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  } else if (token === null) {
    console.log("error");
  }
}
function logOut() {
  window.location.reload();
  localStoarage.setItem("user", null);
}
//         const list = document.querySelector('.posts');
//         // ​
//         //         for (let i = 0; i < res.length; i++) {
//         //             const item = document.createElement('li');
//         //             const title = document.createElement('h3');
//         //             const description = document.createElement('p');
//         //             item.appendChild(title);
//         //             item.appendChild(description);
//         //             title.innerText = res[i].title;
//         //             description.innerText = res[i].description;
//         //             list.appendChild(item);
//         //         }
// function updateDom() {
//   document.querySelector(".signupForm").style.display = "none";
//   document.querySelector(".postForm").style.display = "block";
//   fetch("http://thesi.generalassemb.ly:8080/user/post", {
//     headers: {
//       Authorization: "Bearer " + localStorage.getItem("user")
//     }
//   })
//     .then(res => {
//       return res.json();
//     })
//     .then(res => {
//       console.log(res);
//       //         const list = document.querySelector('.posts');
//       // ​
//       //         for (let i = 0; i < res.length; i++) {
//       //             const item = document.createElement('li');
//       //             const title = document.createElement('h3');
//       //             const description = document.createElement('p');
//       //             item.appendChild(title);
//       //             item.appendChild(description);
//       //             title.innerText = res[i].title;
//       //             description.innerText = res[i].description;
//       //             list.appendChild(item);
//       //         }
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }
// //Allow user to post after login
// function createPost(event) {
//   // event.preventDefault();
//   const title = document.querySelector(".title");
//   const description = document.querySelector(".description");
//   fetch("http://thesi.generalassemb.ly:8080/post", {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer " + localStorage.getItem("user"),
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       title: title.value,
//       description: description.value
//     })
//   })
//     .then(res => {
//       console.log(res);
//       updateDom(res);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }
// function createPost(event){
//   event.preventDefault();
//   const title = document.getElementsByClassName('title');
//   const description = document.getElementsByClassName('description');
//
//   fetch("")
//
