---
title: 天气系统
tags: [blog制作资料]
index_img: /img/tags/blog.png
---

## 1、获取地理位置

有很多大厂都提供了获取地理位置的api，本blog使用搜狐api，其余不加详细描述；

### 使用HTML5 提供的 Geolocation API 来获取当前位置

此方案可以获取经纬度

```html
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    // 在此处使用经度和纬度进行其他操作
  }, function(error) {
    console.log("获取位置失败: " + error.message);
  });
} else {
  console.log("浏览器不支持地理定位");
}
```

### 使用搜狐api获取当前地址信息

此方案可以获取当地的位置的IP、编码、名称

```html
<script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
<script type="text/javascript">
console.log(returnCitySN)
//返回对象Object {cip: "122.70.200.146", cid: "110000", cname: "北京市"}
</script>
```

## 2、通过地址获取当地的天气信息

此处使用高德地图的api，

### 注册高德地图开放平台

地址为 https://console.amap.com/dev/key/app

### 创建应用

点击「应用管理>我的应用>创建新应用」，应用名称可自定义，应用类型选择「天气」
![](/img/weather/createApp.png)

点击右上角的「添加Key」，Key 名称可自定义，服务平台选择「Web服务」，同意下方的协议，提交
![](/img/weather/setApp.png)

此处就获得了自己的天气秘钥key

### 根据秘钥获取天气信息

调用高德地图api获取当地天气

```javascript
const apiKey = 'YOUR_KEY'; // 替换为高德的天气API密钥
const cityId = '110000' // 替换为地址信息的cid
const url = `https://restapi.amap.com/v3/weather/weatherInfo?key=${YOUR_KEY}&city=${cityId}&extensions=all`;

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('网络异常');
  })
  .then(data => {
    // 处理天气数据
    console.log(data)
  })
  .catch(error => {
    console.error('错误获取天气信息', error);
  });

```

## 3、设置"雨", "雪"天气canvas

制作canvas，识别天气返回值中包含"雨", "雪"关键字时，对应替换
