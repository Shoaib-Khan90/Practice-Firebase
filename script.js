 //Env ko mangwana ka liya 
 // is sa jo bi cheez ap na private ki hu dubra enable hu jygi yani ap ki api key hogyi jo bi hu 
 //env install npm i dotenv 

//  import dotenv from "dotenv"
//  dotenv.config();


 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword
  , onAuthStateChanged , signInWithEmailAndPassword , signOut 
  } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBIBVVl1-qah5qPAns6ULaO8QmjfcnugiA",
    authDomain: "ecommerce-7f1e2.firebaseapp.com",
    projectId: "ecommerce-7f1e2",
    storageBucket: "ecommerce-7f1e2.firebasestorage.app",
    messagingSenderId: "1090647740235",
    appId: "1:1090647740235:web:97a023e4b6638f1c7022ce",
    measurementId: "G-JE0WY3T385"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  console.log(app)
  console.log(auth)

  //for email
  let text = document.getElementById("text")

  //Sign Up

  let Signupbtn = document.getElementById("Signupbtn")

  //On Reload data

  onAuthStateChanged(auth, (user) => {
  if (user) {

    Email.value=""
    Password.value=""

  } else {

  }
});

  //action
  Signupbtn.addEventListener("click",Signup)

  function Signup(){
     let Email = document.getElementById("Email").value 
     let Password = document.getElementById("Password").value 

      createUserWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
   
    const user = userCredential.user;

    //for email show on page
    text.innerText = "Your account was successfully sign up" 
    text.style.color = "pink"
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
  }

  //login page
  let LoginButton = document.getElementById("Loginbtn")

  LoginButton.addEventListener("click",Login)
  
    function Login(){
     let LoginEmail = document.getElementById("LEmail").value 
     let LoginPassword = document.getElementById("LPassword").value

      signInWithEmailAndPassword(auth, LoginEmail, LoginPassword)
  .then((userCredential) => {
   
    const user = userCredential.user;

    //for email show on page
    
    text.innerText = "Your account was Successfully Login"
    text.style.color = "green"
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    text.innerText = errorCode
    text.style.color = "red"
    
  });
  }


  //Logout

  let LogoutButton = document.getElementById("logout")

  LogoutButton.addEventListener("click",logout)

  function logout(){
                    
  signOut(auth)

  .then(() => {
         
          text.innerText = "Your account was Successfully Logout"
          text.style.color = "gray"
  })
  .catch((error) => {
      console.log(error)
});
  }





