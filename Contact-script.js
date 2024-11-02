function ContactValidation(){
    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var mobileno=document.myform.mobileno.value;
    if(name == "" || name == "null"){
        alert("This field cant be blank");
        return false;
    }
    else if(email == "" ||mobileno == ""){
        alert("contact information is mandatory");
        return false;
    }
}