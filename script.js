 //Env ko mangwana ka liya 
 // is sa jo bi cheez ap na private ki hu dubra enable hu jygi yani ap ki api key hogyi jo bi hu 
 //env install npm i dotenv 

//  import dotenv from "dotenv"
//  dotenv.config();

//Import

 import{
    firebaseConfig,
    initializeApp,
    getAuth, 
    createUserWithEmailAndPassword,
   onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut 
  } from './Firebase.js'

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
    LPassword.value=""
    LEmail.value = ""

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
     let LEmail = document.getElementById("LEmail").value
     let LPassword = document.getElementById("LPassword").value


      signInWithEmailAndPassword(auth, LEmail, LPassword)
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

  //Hide And Show 

  let HideAndShow = document.getElementById("show")

  HideAndShow.addEventListener("click",function(){

    if(Password.type === "password"){
      Password.type = "text";
      HideAndShow.innerText = "";
    }
    else{
      Password.type = "password";
      HideAndShow.innerText = "";
    }
    })

     let Hide = document.getElementById("hide");

    Hide.addEventListener("click",function(){

    if(LPassword.type === "password"){
      LPassword.type = "text";
      Hide.innerText = "";
    }
    else{
      LPassword.type = "password";
      Hide.innerText = "";
    }
    })




