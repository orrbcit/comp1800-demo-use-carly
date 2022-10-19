import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

const auth = getAuth(app);

//Authentication - signup:
document.getElementById("signup").addEventListener('click', function(){

    //define the values from the email and password input box
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
                
                //using firebase service for authentication. This code is copy paste from the documentation.
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log("Went through")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode +  errorMessage)
    });

})

