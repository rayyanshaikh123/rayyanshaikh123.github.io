const firebaseConfig = {
  apiKey: "AIzaSyB9ZMolCwqZD8jFX1Ivo5bmRTqSa_Hv7vs",
  authDomain: "contact-90190.firebaseapp.com",
  databaseURL: "https://contact-90190-default-rtdb.firebaseio.com",
  projectId: "contact-90190",
  storageBucket: "contact-90190.appspot.com",
  messagingSenderId: "1004253019490",
  appId: "1:1004253019490:web:a3b19af60eee00f80d003b"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var feedFormDB = firebase.database().ref("feedForm");
  
  document.getElementById("feedForm").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");
  
    saveMessages(name, email, message);
  
    document.getElementById("feedForm").reset();
    window.location.assign("homie.html")
    alert(" Sent successful!");
  }
  
  const saveMessages = (name, email, message) => {
    var newFeedForm = feedFormDB.push();
  
    newFeedForm.set({
      name: name,
      email: email,
      message: message,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  