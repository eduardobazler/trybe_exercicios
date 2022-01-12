const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

function sendMarsTemperature(temperature, tempo) {
  const mensagem = `Mars temperature is: ${temperature()} degree Celsius`;
  setTimeout(() => console.log(mensagem), tempo());
}

sendMarsTemperature(getMarsTemperature, messageDelay); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
