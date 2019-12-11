


auth.onAuthStateChanged(function(user){



    if(user){
    
    console.log("Logged in");
    
    
    
    }
    
    else {
    
    
    console.log("Not Logged in");
    
    window.location.href="index.html";
    }
    
    
    
    
    
    
    });
    
    var logout=document.querySelector("#logout");

    logout.addEventListener("click",function(event){


event.preventDefault();

auth.signOut().then(function(){


console.log("user signedout ");

window.location.href="index.html";

});



    })

    