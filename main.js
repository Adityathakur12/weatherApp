
// initializing constant 
const tempField = document.querySelector(".temp_field .temp #temp_f")
const p_lace = document.querySelector(".temp .place")
const icon = document.querySelector(".img img")
const searchField = document.querySelector(".search")
const form = document.querySelector("nav form")
const wind = document.querySelector("#wind")
const humidity = document.querySelector("#humidity")
const visibility = document.querySelector("#visibility")
const pm = document.querySelector("#pm")

// adding event in form
form.addEventListener("submit",search);

// fatching data from api
let target="patna"
const datafetch = async (target) => {
  try{
    
    const url =  `https://api.weatherapi.com/v1/current.json?key=429ec1e6014044f5a5a95806230701&q=${target}&aqi=yes`

    const responce = await fetch(url);

    const data = await responce.json();

    
// restructuring data 
    const {
      current:{
        temp_c,wind_kph,humidity,vis_km,air_quality:{pm2_5},condition:{
          icon}
        
      },
          
      location:{name}
    } = data
   

  const temp_deg = `${temp_c}°C`
  const kph = `${wind_kph} kph`
  const km = `${vis_km} km`

  // calling updated dom
  updatedom(temp_deg,name,icon,kph,humidity,km,pm2_5);

}
catch(error){
  alert("location not found ");
}}





// fnnctino for calling data
function updatedom(temprature,citi,emoji,air,h_umidity,v_isibility,smoke){
  
  tempField.innerText = temprature;
  p_lace.innerText = citi;
  icon.src = emoji;
  wind.innerText = air;
  humidity.innerText = h_umidity;
  visibility.innerText = v_isibility;
  
  const num_pm = smoke;
  const str_pm = num_pm.toString();
  const result = str_pm.substring(0,4)
  const num1 = result.split(".")[0]
  pm.innerText = `${num1}`
}

datafetch(target);

// function for taking input from user
function search(e) {
  e.preventDefault();

  target = searchField.value;

  datafetch(target);
}
