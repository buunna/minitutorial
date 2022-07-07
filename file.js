// object to store details
let userDetailsDatabase = {}


function getUserDetails(){

 let userName = prompt("Enter you username")
  if( userName == null){
      return
  }
 function validateuserName(userName){
     if(userName.length < 10 && userName.length > 0){
         return true
     }
     else {
         return false
     }
 }
   while(validateuserName(userName) == false){
       userName = prompt("Username must be less than 10 and greater than 0")
   }
   userDetailsDatabase["Username"] = userName
 //email address
 let email = prompt("Enter your email address")
 if(email == null){
     return
 }
 function validateEmail(email){
     const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return emailCheck.test(String(email).toLowerCase());
     emailChecckResult = emailCheck.test(email);
     if (emailChecckResult == true){
         return true
     }
     else{
         return false
     }
 }
 
  while (validateEmail(email) == false){
    email = prompt("Enter a valid email")
  }
 userDetailsDatabase["Email"] = email
  // phone number
 let phoneNumber = prompt("Enter your phone number")
  if (phoneNumber == null){
      return
  }
 function validatephonenumber(phoneNumber){
     if (phoneNumber.length == 11){
         return true
     } else {
         return false
     }
 }
 while (validatephonenumber(phoneNumber)== false){
    phoneNumber = prompt("Enter a valid Phone Number(must be 11 digit, try agaim!)")
 }
 userDetailsDatabase["Phonenumber"] = phoneNumber
 // password
 let password = prompt("Enter your password")
  if (password == null){
      return 
  }
 
 function validatepassword(password){
     if (password.length < 6){
         return false
     } else{
         return true
     }
 }
 while(validatepassword(password)== false){
     password = prompt("password must not be less than 6 digits")
 }
  
 userDetailsDatabase["Password"]= password
 // confirm password
 let confirmPassword = prompt("Confirm your password")
 if (confirmPassword == null){
     return
 }
 
 function validateconfirmpassword(confirmPassword){
     if (confirmPassword != password){
         return false
     } else {
         return true
     }
 }
 
while(validateconfirmpassword(confirmPassword)== false){
    confirmPassword == prompt ("Enter  the correct passwordS")
}
userDetailsDatabase["Confirm password"]= confirmPassword


}

function displayUserDetails(){
    alert(
        `Your Details\n\nUsername: ${userDetailsDatabase.Username}\nPhone Number: ${userDetailsDatabase.Phonenumber}\nEmail: ${userDetailsDatabase.Email} `)
}







