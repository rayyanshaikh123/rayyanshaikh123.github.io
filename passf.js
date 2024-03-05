

const firebaseConfig = {
    apiKey: "AIzaSyCvCTN2xKzgpiTahvG0Ig-HitmDyT_mdl8",
  authDomain: "log-and-reg-33601.firebaseapp.com",
  databaseURL: "https://log-and-reg-33601-default-rtdb.firebaseio.com",
  projectId: "log-and-reg-33601",
  storageBucket: "log-and-reg-33601.appspot.com",
  messagingSenderId: "626029086302",
  appId: "1:626029086302:web:c7ef5fe68dcdf8145696cf"
  };
  
  firebase.initializeApp(firebaseConfig);
  function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

  