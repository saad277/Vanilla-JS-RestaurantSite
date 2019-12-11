const section = document.querySelector("#cart");
var btncheckout=document.getElementById("btncheckout");

var table=document.querySelector(".table");

btncheckout.setAttribute("class","waves-effect waves-light btn disabled")

db.collection("menu").get().then(function (snapshot) {



    console.log(snapshot.docs);

    render(snapshot.docs);

})



var flag=1;

var items=[];
    var totalprice=[];

const render = function (data) {



    data.forEach(element => {

        menu = element.data();


        


        const card = `            
            
            
            <div class="col s12 m6" style="width:200px; height:200px; margin-left: 30px; margin-right: 30px; margin-top: 160px;" >   
        <div class="card">
        <div class="card-image">
          <img src="${menu.image}" style="height:140px;">
          
          <button class="btn-floating halfway-fab waves-effect waves-light red button"><i class="material-icons">add</i></button>
        </div>
        <div class="card-content" style="height:100px;">
          <h6>${menu.Name1}</h6>
        </div>
        &nbsp Price :
        <div class="teal lighten-1" style="font-size:18px; padding-left:30px;">${menu.price1}</div> 
      </div>
    </div>      `;


    section.innerHTML=section.innerHTML + card;

    

    var button=document.querySelectorAll(".button");

    

    button.forEach(function(button){


      button.addEventListener("click",function(){

       var parent=this.parentElement;
        
       var parent2=parent.parentElement;

       //console.log(parent2);

       var parent3=parent2.children[1];

       var parent4=parent3.children[0];

        var itemname=parent4.innerHTML;
      // console.log(itemname);

       var price=parent2.children[2].innerHTML;

       

      
       

        

      

       if(items.includes(itemname)!=true){

       
       cart(itemname,price);

        items.push(itemname);  
      
      
btncheckout.setAttribute("class","waves-effect waves-light btn active")

M.toast({html: 'Added To Cart'})
      
      } else {     M.toast({html: 'Already In Cart'})            }

        console.log(items);
       


      })




    });

    



    });




}


var cart =function(name,pricea){


var quantity=1;
quantity=parseInt(quantity);
var price=parseInt(pricea);

name1=name

console.log("......"+name1);



const div=`


<tr>
<td>${name}</td>
<td>   <button class="minus" > - </button>   <span>  ${quantity} </span> <button class="add"> + </button>  </td>
<td class="prices">${price}</td>

</tr>

`
table.innerHTML=table.innerHTML + div;

var add =document.querySelectorAll(".add");


add.forEach(function(add){  


  
 add.addEventListener("click",function(){

  console.log("price........"+price);
  
  console.log("........"+name1);

 var parent=this.parentElement;


 var quantityhtml=parent.children[1];

 var quantity=parseInt(quantityhtml.innerHTML);

 quantity=quantity+1;

 quantityhtml.innerHTML=quantity;

 parent2=parent.parentElement;
 
 
 price1=parent2.children[2].innerHTML

 console.log(price1);
 



 pricef=price*quantity;

 

 

 price1=parent2.children[2].innerHTML=pricef;

 






 });

});



 var minus =document.querySelectorAll(".minus");

 minus.forEach(function(minus){  

minus.addEventListener("click",function(){

  var parent=this.parentElement;
  
  
   var quantityhtml=parent.children[1];

 var quantity=parseInt(quantityhtml.innerHTML);

 

 quantity=quantity-1;

 quantityhtml.innerHTML=quantity;

 
 


 pricef=price*quantity;


 parent2=parent.parentElement;

 price1=parent2.children[2].innerHTML=pricef;

 

 console.log(price);

 
  

  
//deleting cart elements

  if(quantity<1 || quantity==0 ){

      
    console.log("parent"+parent);

    var parent2=parent.parentElement;

    console.log("parent 2"+parent2)

    name1=parent2.children[0].innerHTML;

    console.log("name1"+name1);

    

    

    console.log("name"+name1);

    
    
    var del=items.indexOf(name1);

    

    console.log(del)

    i=items.splice(del,1);

    console.log("splice"+i);

    console.log("remaining"+items);

    

    parent2.remove();

    


    
  }

  if(items.length==0){


    btncheckout.setAttribute("class","waves-effect waves-light btn disabled");
  
  
  
   }
  
  
  });
  
 });




 




 




}








 
 
 
 

 btncheckout.addEventListener("click",function(){

  

 


var tprice=document.querySelectorAll(".prices");

console.log("this is total node"+tprice);

console.log(tprice.length);

tprice.forEach(function(data){

  console.log(data);
  tprice2=data.innerHTML;
  tprice3=parseInt(tprice2);

  console.log(tprice3);

  totalprice.push(tprice3);

  console.log("total price is "+totalprice);
  console.log("items"+items);

  
  
  
 


});

 


btncheckout.setAttribute("class","waves-effect waves-light btn disabled");

var sum=function (total, num) {
  return total + num;
} 

totalp=totalprice.reduce(sum);


final(items,totalp);




 }); 

 var finalc=document.querySelector(".final");

 

 var final=function(fitems,fprice){

  var user=firebase.auth().currentUser;

 console.log(user);


var div=`    <h5 style="padding-left:30px">    Items :  ${fitems}         </h5> 
                <h5 style="padding-left:30px">   Price   ${fprice}  Rs       </h5> 
                <h5 style="padding-left:30px">   User :  ${user.email}        </h5>   
                <button class="waves-effect waves-light btn " id="out" style="margin-top:20px; margin-left:5px"> Confirm Order </button>
                
                `


finalc.innerHTML+=div;




var out=document.querySelector("#out");

console.log(out);

out.addEventListener("click",function(){

  var sum=function (total, num) {
    return total + num;
  } 
  
  totalp=totalprice.reduce(sum);



console.log("items and price "+items+" "+totalp );



db.collection("orders").add({

item:items,
price:totalp


})

out.setAttribute("class","waves-effect waves-light btn disabled");

});




 }

 




