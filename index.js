// initializing constant 
const tempField = document.querySelector(".temp_field .temp #temp_f")
const p_lace = document.querySelector(".temp .place")
const icon = document.querySelector(".img img")
const searchField = document.querySelector(".search")
const form = document.querySelector("form")
const wind = document.querySelector("#wind")
const humidity = document.querySelector("#humidity")
const visibility = document.querySelector("#visibility")
const pm = document.querySelector("#pm")

// adding event in form
form.addEventListener("submit",search);

// fatching data from api
let target="patna"
const datafetch = async (target) => {
  try  {
    
    const url =  `https://api.weatherapi.com/v1/current.json?key=89bbdbb1544e4919a3e72926231001&q=${target}&aqi=yes`

    const responce = await fetch(url);

    const data = await responce.json();

    
// restructuring data 
    const {
      current:{
        temp_c,wind_kph,humidity,vis_km,uv,condition:{
          icon}
        
      },
          
      location:{name,country}
    } = data
   

  const temp_deg = `${temp_c}°C`
  const kph = `${wind_kph} kph`
  const km = `${vis_km} km`

  // calling updated dom
  updatedom(temp_deg,name,country,icon,kph,humidity,km,uv);

}
catch(error){
  alert("location not found")
}}





// fnnctino for calling data
function updatedom(temprature,citi,country,emoji,air,h_umidity,v_isibility,uv){
  
  tempField.innerText = temprature;
  
  
  let citi_name = citi
  
  let country_name = country
  
  let fullname = `${citi_name} , ${country_name}`
  
  
  p_lace.innerText = fullname;
  
  
  
  
  
  
  icon.src = emoji;
  wind.innerText = air;
  humidity.innerText = h_umidity;
  visibility.innerText = v_isibility
  pm.innerText = uv
}

datafetch(target);

// function for taking input from user
function search(e) {
  e.preventDefault();

  target = searchField.value;

  datafetch(target);
}