//JAVASCRIPT

alert ("Hello!")

 function ShowUserName ()
    {
        var uname = document.getElementById ('UserName').value ;
        
        if (uname.length==0)
        {
            alert ("Enter your name") ;
            
            return false ;
        }
        
        var msg = "Hello " + uname + " How are you?" ;
            
        alert (msg) ;
    };