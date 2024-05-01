let prd = document.querySelectorAll('.card-body button');
let div1 = document.getElementById("div1");
let btn = document.getElementById("showPrice");

// console.log(prd)

let price = 0
prd.forEach(function(item){
    // console.log(item)
    item.onclick = function(){
        price += +(item.getAttribute("price"));
        // console.log(price)
        div1.innerHTML += item.textContent +"<br>";

    }
}
)
btn.onclick= function(){
    div1.innerHTML+=(("Total Price")+(price) )+"<br>"  
}
   






// let btn=document.getElementsByClassName('btn10');


// let div33=document.getElementById('div33');



// prd.forEach(function(item){
//    item.onclick = function(){
//    alert("done")

//    } 
   
   








// }
// )

