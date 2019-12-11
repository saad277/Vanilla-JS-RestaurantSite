//The core Firebase JS SDK is always required and must be listed first 


 //TODO: Add SDKs for Firebase products that you want to use
     //https://firebase.google.com/docs/web/setup#config-web-app -->


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDGvYPYc_7OJ6DWAdMrG7h7RN8-8HJxMZ8",
    authDomain: "food-app-ac57f.firebaseapp.com",
    databaseURL: "https://food-app-ac57f.firebaseio.com",
    projectId: "food-app-ac57f",
    
   
    appId: "1:205109092324:web:4c7ed9c3ea9c56bc6731f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var auth=firebase.auth();
  var db=firebase.firestore();


