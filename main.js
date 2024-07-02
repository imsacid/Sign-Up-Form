const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirmpassword = document.querySelector("#confirmpassword")
const saveBtn = document.querySelector("#saveBtn")
const error = document.querySelector("#error")
const passwordError = document.querySelector("#passwordError")
const Confirm = document.querySelector("#Confirm")
const passwordButton = document.querySelector("#passwordButton")


saveBtn.addEventListener("click", function(e){
    e.preventDefault();
    checkEmpty()
    
})

function checkEmpty (){
    if(name.value == ""){
        error.innerHTML = "Please fill all the fields"
        error.style.color="red"
        name.style.border="2px solid red" 
        passwordButton.style.marginTop ="24px"
    }
else if (email.value == ""){
    email.style.border="2px solid red"
    }
else if (password.value ==""){
    password.style.border="2px solid red"
}
else if (confirmpassword.value ==""){
    confirmpassword.style.border="2px solid red"
}
else{
    error.innerHTML = ""
    name.style.border="2px solid green"
    email.style.border="2px solid green"
    password.style.border="2px solid green"
    confirmpassword.style.border="2px solid green"
    passwordError.innerHTML=""
    Confirm.innerHTML = ""
}


if (password.value.length<6){
    passwordError.innerHTML="Password must be at least 6"
}
else{
    passwordError.innerHTML="Strong"
    passwordError.style.color="green"
}



if (confirmpassword.value!= password.value){
    error.innerHTML = "Passwords do not match"
    confirmpassword.style.border="2px solid red"
    // Confirm.style.display="block"
    Confirm.innerHTML="Passwords do not match. Please try again"
    
}
else{
    
    Confirm.innerHTML = ""
}



}

//Fucntion that check password length

function checkPassword (){
    if(password.value.length < 6){
        error.innerHTML = "Password must be at least 6 characters long"
        
    }
    else{
        error.innerHTML = ""
        password.style.border="2px solid green"
    }
}

//Button that handles password hide and visible
passwordButton.addEventListener("click", function(){
    if(password.type === "password"){
        password.type = "text"
        
    }
    else{
        password.type = "password"
    }
 
})