const ap = new APlayer({
  container: document.getElementById('aplayer'),
  // theme: document.getElementsByTagName('html')[0].attributes['data-user-color-scheme'].value === 'light' ? '#FADFA3' : '#2f4154',
  fixed: true,
  listFolded: true, // 列表默认折叠
  // audio: [{
  //   name: "春风精灵",
  //   artist: '卡了佛度colorfuldo/Lil DEER',
  //   url: 'https://m804.music.126.net/20240815113544/403b62ab334f5b78acaebae254d8c5cf/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/45228973401/5895/278c/12e0/2575e4e6e8f450d7ea70917ed5faf4c6.m4a?authSecret=00000191540429f61c240a3b197e6f38',
  //   cover: 'https://p1.music.126.net/S5KD3iJN9wQMuKkubUUl5w==/109951169869726178.jpg?param=200y200',
  // }, {
  //   name: "neo-aspect",
  //   artist: 'Roselia',
  //   url: 'https://m704.music.126.net/20240815111912/c95a1649c7a2dce50c73f3a178d31524/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/34088701508/b6b3/1ac1/65ae/bba25e4977b41129f006e93ac93d07d2.m4a?authSecret=0000019153f5078917cd0a3b1dda1305',
  //   cover: 'https://p2.music.126.net/-uh9AQeSXg6P5dbJt63LKQ==/109951169378624422.jpg?param=200y200',
  // }]
});