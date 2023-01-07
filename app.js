const datafetch = async () => {

    const url =  `https://api.weatherapi.com/v1/current.json?key=&q=Patna`

    const responce = await fetch(url);

    const data = await responce.json();

    console.log(data);

}
datafetch();