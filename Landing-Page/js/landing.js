// To test that the js is hooked up with the document.
console.log("hello");


// This is a formula similarily used for the Wheather App H.W., where we use the window.onload.
window.onload = function() {

  const button = document.getElementById('enter');
// Calling our button from the html with an id
  button.addEventListener('click', sineUp);
  // Giving this an addEventListener of click and calling the sineUp function
};

// The function for the sineUp method.
let sineUp = function() {
  // Api key taken from the AmexApi for the project
  fetch('http:thesi.generalassemb.ly:8080/signup'/ {
      // Using the post method
    method: "POST",
// In the header we need the key, and the value(agin take from the Api for the project)
    header: {"key": "Content-Type" ,
            "value": "application/json"} ,
// Our body for our first user, Kakarot!!!!!!!!!!!!!(Broly Voice)
    body: JSON.stringify ({
	     "email": "goku@anime.com" ,
	      "password": "super" ,
	       "username" : "kakarot"
       })
// Completing our then response, with console.log(response.json to check it out
// as well as our error popup if something went wrong.)
        // .then ((response) => {
        //   return response;
        // })
       .then ((response) => {
         console.log(response.json())
       })
       .catch ((error) => {
         console.log(error);
       })
  })

}
