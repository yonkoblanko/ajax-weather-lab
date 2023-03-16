let weatherData, userInput;


const $state = $('#state');
const $temp = $('#temp');
const $feelsLike = $('#feelsLike');
const $weather = $('#weather');
const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event) {
    event.preventDefault();
       // calling preventDefault() on a 'submit' event will prevent a page refresh  
    userInput = $input.val();
      // getting the user input

$.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?q=` + userInput + `&appid=c7ae3c619da9d59140faf463255b5ff6`
  }).then(
    (data) => {
        weatherData = data;
        render();
     console.log(data);
    },
    (error) => {
     console.log('bad request', error);
    }
  );

}
 
   
function render() {
    $temp.text(weatherData.main.temp);
    $feelsLike.text(weatherData.main.feels_like);
    $weather.text(weatherData.weather.main);
    $state.text(weatherData.name)
 }