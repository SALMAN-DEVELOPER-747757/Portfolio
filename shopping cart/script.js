const products=[

{
id:1,
name:"Wireless Headphones",
price:120,
image:"https://picsum.photos/300?1"
},

{
id:2,
name:"Smart Watch",
price:180,
image:"https://picsum.photos/300?2"
},

{
id:3,
name:"Laptop",
price:900,
image:"https://picsum.photos/300?3"
},

{
id:4,
name:"Gaming Mouse",
price:60,
image:"https://picsum.photos/300?4"
},

{
id:5,
name:"Keyboard",
price:80,
image:"https://picsum.photos/300?5"
},

{
id:6,
name:"Camera",
price:550,
image:"https://picsum.photos/300?6"
}

];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

const productsDiv=document.getElementById("products");
const cartItems=document.getElementById("cartItems");
const total=document.getElementById("total");
const count=document.getElementById("count");

products.forEach(product=>{

productsDiv.innerHTML+=`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>$${product.price}</p>

<button onclick="addCart(${product.id})">

Add to Cart

</button>

</div>

`;

});

function addCart(id){

const item=cart.find(x=>x.id===id);

if(item){

item.qty++;

}else{

const product=products.find(x=>x.id===id);

cart.push({...product,qty:1});

}

save();

}

function save(){

localStorage.setItem("cart",JSON.stringify(cart));

render();

}

function render(){

cartItems.innerHTML="";

let sum=0;

let items=0;

cart.forEach(item=>{

sum+=item.price*item.qty;

items+=item.qty;

cartItems.innerHTML+=`

<div class="item">

<div>

<b>${item.name}</b>

<br>

$${item.price}

</div>

<div class="qty">

<button onclick="change(${item.id},-1)">-</button>

${item.qty}

<button onclick="change(${item.id},1)">+</button>

<button class="delete" onclick="removeItem(${item.id})">

<i class="fa fa-trash"></i>

</button>

</div>

</div>

`;

});

total.innerHTML=sum.toFixed(2);

count.innerHTML=items;

}

function change(id,value){

const item=cart.find(x=>x.id===id);

item.qty+=value;

if(item.qty<=0){

cart=cart.filter(x=>x.id!==id);

}

save();

}

function removeItem(id){

cart=cart.filter(x=>x.id!==id);

save();

}

render();