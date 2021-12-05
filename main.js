function cardview(file,callback){
   var xhr = new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange = function(){
     if(xhr.readyState === 4 && xhr.status =="200"){
       callback(xhr.responseText);
     }
   };
 xhr.send();
 }
 cardview("data.json",function(text) {
   var data = JSON.parse(text);
   display(data.mobiles)
 });


function display(raw) {
var pt = document.querySelector(".row")
  for (var i in raw) {
  var pcard = document.createElement("div")
  pcard.classList.add("card")
  pt.append(pcard)
//  img
    var pic = document.createElement("img")
    console.log(pic)
    pic.src = raw[i].img;
pcard.appendChild(pic)
  
 
    // Name
      var mname = document.createElement("h3")
    mname.textContent = raw[i].name;
  console.log(mname)
    pcard.appendChild(mname)
    
//  Model
       var md = document.createElement("h3")
    md.textContent = raw[i].model;
pcard.appendChild(md)
  // price
    
      var prate = document.createElement("h3")
    prate.textContent = raw[i].price;
pcard.appendChild(prate)
  //  offer
       var offp = document.createElement("h3")
    offp.textContent = raw[i].offer;
pcard.appendChild(offp)
  // button
    var bt = document.createElement("button")
    bt.textContent = raw[i].button;
    pcard.appendChild(bt)
    
}
}