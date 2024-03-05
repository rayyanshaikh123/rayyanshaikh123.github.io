
var firebaseConfig = {
  apiKey: "AIzaSyCvCTN2xKzgpiTahvG0Ig-HitmDyT_mdl8",
  authDomain: "log-and-reg-33601.firebaseapp.com",
  databaseURL: "https://log-and-reg-33601-default-rtdb.firebaseio.com",
  projectId: "log-and-reg-33601",
  storageBucket: "log-and-reg-33601.appspot.com",
  messagingSenderId: "626029086302",
  appId: "1:626029086302:web:c7ef5fe68dcdf8145696cf"
  };
  
  firebase.initializeApp(firebaseConfig);
 
  const auth = firebase.auth()
  const database = firebase.database()
  
 
  function register () {
    
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    mobile_no = document.getElementById('mobile_no').value
    roll_no = document.getElementById('roll_no').value
  
  
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
     
    }
    if (validate_field(full_name) == false || validate_field(mobile_no) == false || validate_field(roll_no) == false) {
      alert('One or More Extra Fields is Outta Line!!')
      return
    }
   
    
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      
      var user = auth.currentUser
  
      
      var database_ref = database.ref()
  
     
      var user_data = {
        email : email,
        full_name : full_name,
        mobile_no : mobile_no,
        roll_no : roll_no,
        last_login : Date.now()
      
      }
  
      
      database_ref.child('users/' + user.uid).set(user_data)
  
      window.location.assign("loggg.html")
      alert('Register succesfull')
    })
    .catch(function(error) {
      
      var error_code = error.code
      var error_message = error.message
      
      alert(error_message)
    })
  }
  
  
  function login () {
    
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      
      var user = auth.currentUser
  
      
      var database_ref = database.ref()
  
    
      var user_data = {
        last_login : Date.now()
      }
  
      
      database_ref.child('users/' + user.uid).update(user_data)
  
    window.location.assign("homie.html")
      alert('User Logged In!!')
  
    })
    .catch(function(error) {
      
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      
      return true
    } else {
      return false
    }
  }
  
  function validate_password(password) {
    
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }