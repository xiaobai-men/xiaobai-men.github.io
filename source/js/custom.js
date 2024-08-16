// 获取天气信息
const cityId = returnCitySN.cid === '00' ? '110000' : returnCitySN.cid // 默认为北京
const apiKey = '8eb3fbd1b3144e18b6e9775e4c20188a'; // 替换为高德的天气API密钥
const url = `https://restapi.amap.com/v3/weather/weatherInfo?key=${apiKey}&city=${cityId}&extensions=all`;

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('网络异常');
  })
  .then(data => {
    // 处理天气数据
    const cityData = data.forecasts[0]
    const weather = cityData.casts[0]
    if (weather.dayweather.indexOf('雨')) {
      new Weather({
        id:'canvas',
        weatherType:'rain',
        num:100
      });
    } else if (weather.dayweather.indexOf('雪')) {
      new Weather({
        id:'canvas',
        weatherType:'snow',
        num:100
      });
    }
  })
  .catch(error => {
    console.error('错误获取天气信息', error);
  });
