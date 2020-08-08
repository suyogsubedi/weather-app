const key = 'KB3XqW8DvKhFO1mppSymgD8en7vfR4jx';

// Get Location

const getLocation= async(city)=>{
    const resource='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query= `?apikey=${key}&q=${city}`;
    const response= await fetch(resource+query);
    const data= await response.json();
    return data[0];

};
// Get Weather
const getWeather= async(locationKey)=>{
    const resource='http://dataservice.accuweather.com/currentconditions/v1/';
    const query= `${locationKey}?apikey=${key}`;
    const response= await fetch(resource+query);
    const data= await response.json();
    return data[0];
    
};
// aba suruma location lina paryo tspaxi tsko key lera pass garna paryo
// Yo sab hamile app.js ma gareko xau feri
// getLocation("manchester").then(data=>{
//     return getWeather(data.Key);
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(data);
// });

// Explanation
// suruma maile auta async function banaye. tsko matlab k ta?
// Tyo async lekheko ko functuion execute huda kheri tyo function lai browser le side ma rakhxxa ani tslai
// jj data linuxa telle linxa ani jaba elle  afulai chaine data lirakheko hunxa
// tyo bela program ko aru kura chai chalirakhya hunxa.
// aba hamile api bata data lina khojirakheko xau tei bhayera api ko page ma gayera herne ulle kasari use garr bhaneko xa
// Suruma resource lkheko thau ma maile hamro app le data kun link bata linxa bhanera lkhe
// tspaxi arko line ma maile query gare ani yo query ho hai bhanera browser lai bhanna ? mark bata start garera bhaninxa
// Aru ta data fetch gareko ani tspaxi chai ako response lai json ma convert gareko
// ani tspaxi tyo response aako first object lai matra return gareko



// getLocation("manchester").then(data=>{
//     return getWeather(data.Key);
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(data);
// });

// Yo yaad rakhna parxa ki async function le jaile pani promise return garxa ani tyo promise ko data lai access
// garna hamile .then use garna parxa .catch le chai kunai error xa bhane tellai catch garxa
// getLocation use garda kheri tya nera auta key bhanne object ni return ma aako hunxa ani tyo key ma chai 
// weather related answers haru hunxa
// .then garera hamile getLocation ko data haru lai access garem , getLocation ko sabai information haru chai data ma
// store bhako hunxa , hamile tyo data access garem ani tspaxi tsko key property lai getWeather(data.key) ma parameter
// banayer pathayem aba return getWeather(data.key ) garda kheri ni promise return hunxa
// Ani tyo promise ko data access garna .then use gareko tellai console ma print gareko
// ani kunai error xa bhane tellai catch gareko









// getWeather("241809");