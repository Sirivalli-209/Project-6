function LoginValidation(){
    var name=document.myform.name.value;
    var email = document.myform.email.value;
    var password = document.myform.password.value;
    var confirmpassword = document.myform.confirmpassword.value;
    if( name == "" || email == "" || password == "" || confirmpassword == "") {
        alert("All required fields must be filled out");
        return false;
    }
}