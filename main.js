const tempField = document.querySelector(".temp .temp_f")
const p_lace = document.querySelector(".temp .place")
const icon = document.querySelector(".img img")
const searchField = document.querySelector(".search")
const form = document.querySelector("form")


let target="patna"
const datafetch = async () => {
  try{
    
  

    const url =  `https://api.weatherapi.com/v1/current.json?key=429ec1e6014044f5a5a95806230701&q=${target}&aqi=yes`

    const responce = await fetch(url);

    const data = await responce.json();

    
   console.log(data); 
    const {
      current:{temp_c,condition:{icon}},
      location:{name}
    } = data
    const temp_deg = `${temp_c}°C`
  updatedom(temp_deg,name,icon);
}
catch(error){
  alert("location not found ");
}
}
function updatedom(temprature,citi,emoji){
  
  tempField.innerText = temprature;
  p_lace.innerText = citi;
  icon.src = emoji;
}

datafetch();


form.addEventListener("submit",search);

function search(e) {
  e.preventDefault();

  target = searchField.value;

  datafetch(target);
}