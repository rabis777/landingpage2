<!-- ================= script.js ================= -->
const buyers=["Anh Tuấn vừa đặt hàng","Chị Lan vừa đặt hàng","Minh vừa đặt hàng","Hải vừa đặt hàng"];

function fakeBuyer(){
const popup=document.getElementById("buyer-popup");
const text=document.getElementById("buyer-text");

text.innerText=buyers[Math.floor(Math.random()*buyers.length)];
popup.style.display="flex";

setTimeout(()=>{
popup.style.display="none";
},3000);
}

setInterval(fakeBuyer,7000);

function scrollToOrder(){
document.getElementById("order").scrollIntoView({behavior:"smooth"});
}

function sendOrder(){
const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const address=document.getElementById("address").value;

if(!name||!phone||!address){
alert("Vui lòng điền đầy đủ thông tin");
return;
}

alert("Đặt hàng thành công!");
}

const toggle=document.getElementById("darkToggle");

toggle.onclick=()=>{
document.body.classList.toggle("dark");
};
