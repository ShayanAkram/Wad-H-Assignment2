function formvalidatefunc()                                    
{ 
    var fname = document.forms["RegForm"]["FName"];
    var lname = document.forms["RegForm"]["LName"];	
    var email = document.forms["RegForm"]["EMail"];      
    var comment = document.forms["RegForm"]["comment"];  
	
    if (fname.value == "")                                  
    { 
        window.alert("Please enter your First name."); 
        name.focus(); 
        return false; 
    } 
   
   
    if (lname.value == "")                                  
    { 
        window.alert("Please enter your Last name."); 
        name.focus(); 
        return false; 
    } 
   
   
    if (comment.value == "")                               
    { 
        window.alert("Please enter your Comment."); 
        name.focus(); 
        return false; 
    } 
    
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    
	if (!validateEmail(email.value))                                  
    { 
        window.alert("Please enter valid email."); 
        email.focus(); 
        return false; 
    }
   
    return true; 
}


function validateEmail(email) 
{
    var re = /\S+@\S+/;
    return re.test(email);
}
	