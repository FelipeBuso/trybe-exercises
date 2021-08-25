const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
function sendMarsTemperature() {
  const temperatureMars = getMarsTemperature();
  const celsiusToF = toFahrenheit(temperatureMars);
  console.log(`Mars temperature is: ${temperatureMars} degree Celsius`);
  if (temperatureInFahrenheit) {
    const fahrenheit = temperatureInFahrenheit(celsiusToF);
  }
  if (greet) {
    const greetCuriosity = greet(temperatureMars)
  }
  
}


setTimeout(() => sendMarsTemperature(temperatureInFahrenheit),messageDelay); // imprime "It is currently 47ºF at Mars", por exemplo
setTimeout(() => sendMarsTemperature(greet), messageDelay); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo