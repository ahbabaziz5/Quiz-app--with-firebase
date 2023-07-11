  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
 
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

 
  

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  let auth = getAuth(app);
  
  let btn = document.getElementById('btn')
  
 btn.addEventListener('click',()=>{
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
 
createUserWithEmailAndPassword(auth, email, password)

.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
 window.location.href='./login.html'
  console.log(user)
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  
  // ..
})


})
