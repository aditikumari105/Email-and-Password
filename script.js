let email=document.querySelector("#email");
let password=document.querySelector("#password");
let success= document.querySelector("#success");
let form =document.querySelector('form');
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector('#emailError').textContent="";
    document.querySelector('#passwordError').textContent="";
    document.querySelector("#success").textContent="";

    const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let valid =true;

    if (!emailRegex.test(email.value)) {
    emailError.textContent = "Please enter a valid email!";
    emailError.style.color = "red";
    valid =false;
    }
    if (!passwordRegex.test(password.value)){
        passwordError.textContent ="Password must have 8 characters, uppercase, lowercase, number and special character.";
        password
        passwordError.style.color="red";
        valid =false;
    }
    if(valid){
        success.textContent="Login Successfully";
        success.style.color="green";

    }

});