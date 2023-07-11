 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAuth,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyC2-kWzJvGpn9B7XVMyfx6r-fBCL1uYEp4",
   authDomain: "test-d14aa.firebaseapp.com",
   projectId: "test-d14aa",
   storageBucket: "test-d14aa.appspot.com",
   messagingSenderId: "1022392053565",
   appId: "1:1022392053565:web:51e35dec0dd7cbd1629f54"
 };


 let login = document.getElementById('login')

 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 let auth = getAuth(app);
 const provider = new GoogleAuthProvider(app)

 
    login.addEventListener('click',()=>{
      let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

        location.href="./quiz.html"
     
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error code" + errorCode)
    console.log("errorMessage" + errorMessage)
    swal({
        title: "Error!",
        text: "First Create Account!",
        type: "error",
        confirmButtonText: "Go back !"
      });
      setInterval(()=>{
        location.href="./index.html"
      },2000)
     
      
  })
})

//for google authentification
let google = document.getElementById('google');
google.addEventListener("click",()=>{
  signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            window.location.href = "./quiz.html"
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage);
            // ...
        });

    
})



