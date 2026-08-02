const monthYear = document.getElementById("monthYear");
const daysContainer = document.getElementById("days");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let date = new Date();

function renderCalendar(){

daysContainer.innerHTML="";

const year = date.getFullYear();
const month = date.getMonth();

const firstDay = new Date(year,month,1).getDay();

const lastDate = new Date(year,month+1,0).getDate();

const today = new Date();

monthYear.innerText = date.toLocaleString("default",{
month:"long",
year:"numeric"
});

for(let i=0;i<firstDay;i++){

const empty=document.createElement("div");

empty.classList.add("day","empty");

daysContainer.appendChild(empty);

}

for(let day=1;day<=lastDate;day++){

const cell=document.createElement("div");

cell.classList.add("day");

cell.innerText=day;

if(
day===today.getDate() &&
month===today.getMonth() &&
year===today.getFullYear()
){
cell.classList.add("today");
}

daysContainer.appendChild(cell);

}

}

prev.onclick=()=>{

date.setMonth(date.getMonth()-1);

renderCalendar();

}

next.onclick=()=>{

date.setMonth(date.getMonth()+1);

renderCalendar();

}

renderCalendar();