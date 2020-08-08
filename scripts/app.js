const form =document.querySelector('form');
const card= document.querySelector('.card')
const details= document.querySelector('.details')
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon');

const updateUI=data=>{
    // const cityDetails=data.cityDetails;
    // const weather=data.weather;

    // Destructure Property
    // mathi maile k gareko xu bhanda kheri 
    // data.cityDetails ra data.weather lai const ma 
    // Store garera rakheko xu tara tsto garne arko
    // tarika pani xa 
    const{cityDetails,weather}=data;
    // Elle cityDetail=data.cityDetails; jasari nei
    // kaam garxa

    // update Details 
    details.innerHTML=`
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `
    console.log(data);
    // Adding the day and night images
    // let timeSrc=null;
    // if(weather.IsDayTime){
    //     timeSrc='img/day.svg'
    // }else{
    //     timeSrc='img/night.svg'
    // }

    // Using ternary operator instead of if else
    let timeSrc=weather.IsDayTime ? 'img/day.svg':'img/night.svg';
    // What we are doing here is
    // if weather.IsDayTime true then it returns the first value('img/day.svg') and if it is false it returns the 
    // Second value('img/night.svg')
    time.setAttribute('src',timeSrc);
    // Removing the display none class
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
};

const getWeatherinfo= async (city)=>{
    const cityDetails= await getLocation(city);
    const weather= await getWeather(cityDetails.Key);
    return{
        cityDetails:cityDetails,
        weather:weather
    };
    
};

// Event Listner

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    city=form.city.value.trim();
    form.reset();

    getWeatherinfo(city).then(data=>{
        updateUI(data);
    }).catch(err=>{console.log(err);});
});