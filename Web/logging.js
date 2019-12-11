
//logging in 



var login=document.querySelector("#login");

login.addEventListener("submit",function(event){



event.preventDefault();

const email=login["login-email"].value;
const password=login["login-password"].value;

console.log(email);

console.log(password);



auth.signInWithEmailAndPassword(email,password).then(function(cred){


console.log(cred.user);



}).catch(function(error){

    alert("Invalid User Name Or Password");


})








});