
let vis=document.querySelector(".display");
vis.style.visibility="hidden";

let body1=document.querySelector(".value");
let body2=document.querySelector("body");



async function call(){

    const f=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname.value}&appid=01e25f81be8a2229eb7f57abe8e90972`);
    const data=await f.json();
    
    
    
    console.log(data);
    
    
    
  
    
for(let i=1;i<8;i++){
  let tmax=((data.list[i].main.temp_max)-273.15).toFixed(2)+"°C";
  let l=document.querySelector("#l"+i);
  l.innerText="MAX:"+tmax;
  
  let tmin=((data.list[0].main.temp_min)-273.15).toFixed(2)+"°C";
  let r=document.querySelector("#r"+i);
  r.innerText="MIN:"+tmin;
  

  let icn=data.list[i].weather[0].icon;
  let im=document.querySelector("#m"+i);
  im.src="https://openweathermap.org/img/wn/"+icn+"@2x.png";

}
    
  }
  
    
  

  let cityname=document.querySelector("#cityname");
  console.log(cityname.value);
  
  function clk(){
    vis.style.visibility="visible";
  
let h=document.querySelector("#place");
h.innerText="-----"+cityname.value+"-----";
call();

  }


  