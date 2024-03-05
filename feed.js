const firebaseConfig = {
  apiKey: "AIzaSyB9LDSUwQ93UdGO1SzksSWEQ0pOUPFhdQM",
  authDomain: "feed-back-d97b6.firebaseapp.com",
  databaseURL: "https://feed-back-d97b6-default-rtdb.firebaseio.com",
  projectId: "feed-back-d97b6",
  storageBucket: "feed-back-d97b6.appspot.com",
  messagingSenderId: "26172817533",
  appId: "1:26172817533:web:71e796f031f01f38f57114",
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
  window.location.assign("homie.html");
  alert("Feedback sent successful!");
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
