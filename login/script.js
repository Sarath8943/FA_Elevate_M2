


 
 function validateName() {
    let nameError = document.getElementById('name-error')
    let name = document.getElementById('name')
    
    if (name.value.trim() == '') {
       nameError.innerHTML = 'name cannot be blank'
       return false
     } else if (name.value.length < 5)  {
       nameError.innerHTML = 'name must not be less than 5 characters'
       return false
     }
     else {
      nameError.innerHTML=''
      return true
     }
   }
   function validateEmailadderss() {
      let email = document.getElementById('email')
      let emailError = document.getElementById('email-error')

       let regEX = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      if (email.value.trim() == '') {
        emailError.innerHTML = "Email canot be blank"
        return false

      } else if (!email.value.match(regEX)) {
        emailError.innerHTML = "Eemail not in global format"
        return false

      } else {
        emailError.innerHTML=''
        return true
      }
   }
function validatePassword() {
  let password = document.getElementById('password')
  let passwordError = document.getElementById('password-error')

  if (password.value.trim() =='') {
    passwordError.innerHTML = "password cannot be blank"
    return false

} else if (password.value.length < 6 || password.value.length > 16) {
  passwordError.innerHTML = "password length cannot be less than 6 characters or more than 16 characters"
      return false

} else {
    passwordError.innerHTML=''
      return true

   }

}

function validateConfirmPassword() {
  let Password = document.getElementById('password')
  let confirmPassword = document.getElementById('ConfirmPassword')
  let confirmError = document.getElementById('ConfirmPassword-error')

  if (password.value != ConfirmPassword.value) {
    confirmError.innerHTML = "password mismatch"
    return false

  } else {
  confirmError.innerHTML = ''
    return  true
  } 
}
function validateForm() {
  let signupError = document.getElementById('signup-error')
  if ( !validateName() || !validateEmailadderss() || !validatePassword() || !validateConfirmPassword()){
  signupError.innerHTML= "please resolve the error"
 return false
  } else {
   signupError.innerHTML =''
    return true
  
  }
}

