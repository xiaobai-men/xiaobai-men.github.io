
const apiKey = 'YOUR_API_KEY'; // 替换为你的天气API密钥
const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log(data);
    // 处理天气数据
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });