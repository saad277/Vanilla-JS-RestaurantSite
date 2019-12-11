

//signup
var signup=document.querySelector("#signup");


signup.addEventListener("submit",function(event){



event.preventDefault();

const email=signup["signup-email"].value;

const password=signup["signup-password"].value;

console.log(email);

console.log(password);

auth.createUserWithEmailAndPassword(email,password).then(function(cred){

console.log(cred);


signup.reset();  

}).catch(function(error){


console.log(error.message);

alert (error.message);


});
 






});






