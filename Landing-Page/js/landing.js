// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Create a log in function that needs a email, password, and user submit so that
// way you can't just press the click button and go in.
function newUser(event){
  let passValue = document.getElementsByClassName('password').value;
  let emailValue = document.getElementsByClassName('email').value;
  let userValue = document.getElementsByClassName('uname').value;
// Used to stop the page from refreshing.
    event.preventDefault();
// When you click the submit button and it goes to our home page.
    window.location.href = "./Homepage.html";
}


// a formula similarily used for the Wheather App H.W., where we use the window.onload.
// the formula used for the signup function to get the user log in credentials.
function postData(event){
  event.preventDefault();
    const email = document.getElementsByClassName('email');
    const password = document.getElementsByClassName('password');
    const username = document.getElementsByClassName('uname');

    fetch('http://thesi.generalassemb.ly:8080/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: email.value,
              password: password.value,
              username: username.value
          })

        })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        localStorage.setItem('user', res.token);
        createPost();
    })
    .catch((err) => {
        console.log(err);
    })
};








// window.onload = function() {


//
//   const button = document.getElementById('enter');
// Calling ourtton from the html with an id
//   button.addEventListener('click', sineUp);
//   // Giving this an addEventListener of click and calling the sineUp function
// };
//
// // The function for the sineUp method.
// let sineUp = function() {
//   // Api key taken from the AmexApi for the project
//   fetch('http:thesi.generalassemb.ly:8080/signup'/ {
//       // Using the post method
//     method: "POST",
// // In the header we need the key, and the value(agin take from the Api for the project)
//     header: {"key": "Content-Type" ,
//             "value": "application/json"} ,
// // Our body for our first user, Kakarot!!!!!!!!!!!!!(Broly Voice)
//     body: JSON.stringify ({
// 	     "email": "goku@anime.com" ,
// 	      "password": "super" ,
// 	       "username" : "kakarot"
//        })
// // Completing our then response, with console.log(response.json to check it out
// // as well as our error popup if something went wrong.)
//         // .then ((response) => {
//         //   return response;
//         // })
//        .then ((response) => {
//          console.log(response.json())
//        })
//        .catch ((error) => {
//          console.log(error);
//        })
//   })
//
// }
