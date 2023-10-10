function clearErrors() {
    errors = document.getElementsByClassName('form-error');
    for (let item of errors) {
        item.innerHTML = "";
    }
}



function setError(id, error) {
    myElement = document.getElementById(id);
    myElement.getElementsByClassName('form-error')[0].innerHTML = error
}


function validateForm() {
    var returnval = true
    clearErrors();

    var fname = document.forms['myForm']["fname"].value;
    if (fname.length < 3) {
        setError("Fname", "*Length of name is too short");
        returnval = false
    }
    if (fname.length == "") {
        setError("Fname", "*First Name must be filled");
        returnval = false
    }
    if (fname.length > 15) {
        setError("Fname", "*First Name must be under 15 Characters");
        returnval = false
    }

    var flname = document.forms['myForm']["flname"].value;
    if (flname.length < 3) {
        setError("FLname", "*Length of name is too short");
        returnval = false
    }
    if (flname.length == "") {
        setError("FLname", "*Last Name must be filled");
        returnval = false
    }
    if (flname.length > 15) {
        setError("FLname", "*Last Name must be under 15 Characters");
        returnval = false
    }

    var femail = document.forms['myForm']["femail"].value;
    if (femail.length == "") {
        setError("email", "*Email must be filled");
        returnval = false
    }
    var femail = document.forms['myForm']["femail"].value;
    if (femail.length > 35) {
        setError("email", "*Email is too long");
        returnval = false
    }
    var fcredit = document.forms['myForm']["fcredit"].value;
    if (fcredit.length == "") {
        setError("credit", "*Credit Card must be filled");
        returnval = false
    }

    var fcredit = document.forms['myForm']["fcredit"].value;
    if (fcredit.length != 16) {
        setError("credit", "*Credit Card should be of 16 digits");
        returnval = false
    }

    var fcvc = document.forms['myForm']["fcvc"].value;
    if (fcvc.length == "") {
        setError("cvc", "*CVC must be filled");
        returnval = false
    }

    var fcvc = document.forms['myForm']["fcvc"].value;
    if (fcvc.length != 3) {
        setError("cvc", "*CVC should be of 3 digits");
        returnval = false
    }
    return returnval;
}

var username = document.getElementById("username");
var userpassword = document.getElementById("userpassword");
var flag = 1;

function validatedFlogin(){
         
        if(username.value == ""){
            document.getElementById("userError").innerHTML = "User Name is empty";
            flag = 0;
        } else if(username.value.length < 3){
            document.getElementById("userError").innerHTML = "User Name Require min 3 Char";
            flag = 1;
        } else{
            document.getElementById("userError").innerHTML = "";
            flag = 1;
        }

        if(userpassword.value.length < 8){
            document.getElementById("passError").innerHTML = "Password is min 8 Char";
            flag = 0;
        }else{
            document.getElementById("passError").innerHTML = "";
            flag = 1;
        }

        if(flag){
            return true;
        } else{
            return false;
        }
}


var fullname = document.getElementById("fullName");
var fullmail = document.getElementById("fullEmail");
var fullpass = document.getElementById("password");
var confirmpass = document.getElementById("confirmpass");


function validUser(){

    if(fullname.value == ""){
        document.getElementById("nameError").innerHTML = "**Please fill up your name"
        
    } else if(fullname.value.length < 3){
        document.getElementById("nameError").innerHTML = "*Length of Fullname is too short"
    }
     else{
        document.getElementById("nameError").innerHTML = "";
    
    }
    if(fullmail.value <8 ){
    document.getElementById("emailError").innerHTML = "**Email must be filled"
    } else{
        document.getElementById("emailError").innerHTML = ""
    }

    if(fullpass.value == ""){
        document.getElementById("passwordError").innerHTML = "**Fill the Password"

    }else if(fullpass.value.length < 8){
        document.getElementById("passwordError").innerHTML = "** length must be atleast 8 characters"
    } else if(fullpass.value > 15){
        document.getElementById("passwordError").innerHTML = "** length must not exceed 15 characters"
    }
     else{
        document.getElementById("passwordError").innerHTML = ""
    }
     if(confirmpass.value == fullpass.value){
        document.getElementById("confError").innerHTML = ""
     }else{
        document.getElementById("confError").innerHTML = "**Confirm password does not match with password"
     }

return false
}

var orgname = document.getElementById("org");
var categname = document.getElementById("categ")

function addEventsnom(){
    alert("nnnnnnnn")
}