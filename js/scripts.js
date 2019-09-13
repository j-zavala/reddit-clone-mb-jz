window.onload = function() {
  let id = "14e6d1c7eac52b00712231f70585c41ea1fccb4590f912c07e6553fe8dcecbe6";

  fetch(`https://api.unsplash.com/photos/random?client_id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
      let viewport = document.getElementsByClassName("container")[0];
      //console.log(viewport[0]);
      viewport.style.backgroundImage = `url(${res.urls.regular})`;
    })
    .catch(err => {
      console.log(err);
    });
};
