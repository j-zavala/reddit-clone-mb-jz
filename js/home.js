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
      postCreator();
    })
    .catch(err => {
      console.log(err);
    });
}

function logUserIn(event) {
  event.preventDefault();
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
        document.querySelector(".container").style.display = "none";
        document.querySelector(".content").style.display = "flex";
        postCreator();
      })
      .catch(err => {
        console.log(err);
      });
  } else if (token === null) {
    console.log("error");
  }
}
function logOut(event) {
  window.location.reload();
  localStorage.clear();
}

function updateDom() {
  // document.querySelector(".signupForm").style.display = "none";
  // document.querySelector(".postForm").style.display = "block";
  fetch("http://thesi.generalassemb.ly:8080/user/post", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user")
    }
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      const list = document.querySelector(".postsBox");
      for (let i = 0; i < res.length; i++) {
        const item = document.createElement("li");
        const title = document.createElement("h3");
        const description = document.createElement("p");
        item.appendChild(title);
        item.appendChild(description);
        title.innerText = res[i].title;
        description.innerText = res[i].description;
        list.appendChild(item);
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function showAllPosts(res) {
  const list = document.querySelector(".postsBox");
  for (let i = 0; i < res.length; i++) {
    const item = document.createElement("li");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    item.appendChild(title);
    item.appendChild(description);
    title.innerText = res[i].title;
    description.innerText = res[i].description;
    list.appendChild(item);
  }
}

//Allow user to post after login
function postCreator() {
  event.preventDefault();
  const title = document.querySelector(".title");
  const description = document.querySelector(".description");
  fetch("http://thesi.generalassemb.ly:8080/post", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title.value,
      description: description.value
    })
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      updateDom(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function commentCreator(event) {
  event.preventDefault();
  const comment = document.querySelector(".descriptionComment");
  fetch("http://thesi.generalassemb.ly:8080/comment/3", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: comment.value
    })
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("inside commentCreator");

      console.log(res);
      updatePost(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function listAllPosts(event) {
  event.preventDefault();
  fetch("http://thesi.generalassemb.ly:8080/post/list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      showAllPosts(res);
    })
    .catch(err => {
      console.log(err);
    });
}

// function updateDom(res) {
//   const list = document.querySelector(".posts");
//   for (let i = 0; i < res.length; i++) {
//     const item = document.createElement("li");
//     const title = document.createElement("h3");
//     const description = document.createElement("p");
//     item.appendChild(title);
//     item.appendChild(description);
//     title.innerText = res[i].title;
//     description.innerText = res[i].description;
//     list.appendChild(item);
//   }
// }

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

// function updateDom(res) {
//   const list = document.querySelector(".posts");
//   for (let i = 0; i < res.length; i++) {
//     const item = document.createElement("li");
//     const title = document.createElement("h3");
//     const description = document.createElement("p");
//     item.appendChild(title);
//     item.appendChild(description);
//     title.innerText = res[i].title;
//     description.innerText = res[i].description;
//     list.appendChild(item);
//   }
// }
