const validUser = "jasiah36";
const validPass = "pass";
async function login() {
  const pass = document.getElementById("user-pass").value;
  const user = document.getElementById("user-name").value; 
//  console.log(`user name: ${user} and password: ${pass}`);
  if (validUser !== user){
      console.log("user does not exist");
      document.getElementById("msg").innerText = "User does Not Exist!";
    
  }else if (validUser == user && validPass == pass){
    
     window.location.href = "home.html";
  }
  else if (validUser == user && validPass !== pass){
      console.log("Incorect username and/or password");
      document.getElementById("msg").innerText = "Incorect username and/or password";
  }
  document.getElementById("user-name").value = ""; // reset the value of html input
  document.getElementById("user-pass").value = "";
}


//light dark mode : https://www.youtube.com/watch?v=1KPd51v3Cok