const balance=document.getElementById("balance");
const income=document.getElementById("income");
const expense=document.getElementById("expense");
const list=document.getElementById("list");
const text=document.getElementById("text");
const amount=document.getElementById("amount");
const addBtn=document.getElementById("addBtn");

let transactions=JSON.parse(localStorage.getItem("transactions"))||[];

function update(){

list.innerHTML="";

let total=0;
let inc=0;
let exp=0;

transactions.forEach((item,index)=>{

total+=item.amount;

if(item.amount>0){
inc+=item.amount;
}else{
exp+=item.amount;
}

const li=document.createElement("li");

li.className=item.amount>0?"plus":"minus";

li.innerHTML=`
<span>${item.text}</span>

<span>
$${item.amount}

<button class="delete" onclick="remove(${index})">
<i class="fa fa-trash"></i>
</button>

</span>
`;

list.appendChild(li);

});

balance.innerText="$"+total.toFixed(2);
income.innerText="$"+inc.toFixed(2);
expense.innerText="$"+Math.abs(exp).toFixed(2);

localStorage.setItem("transactions",JSON.stringify(transactions));

}

addBtn.onclick=()=>{

if(text.value==""||amount.value==""){
alert("Please fill all fields.");
return;
}

transactions.push({
text:text.value,
amount:+amount.value
});

text.value="";
amount.value="";

update();

}

function remove(index){

transactions.splice(index,1);

update();

}

update();