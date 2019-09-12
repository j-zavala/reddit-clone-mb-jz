window.onload = function() {
  let id = "0984c448918c7679173694ae2737ab63ea485e7e738715dd5818ad1ab1b20752";

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
