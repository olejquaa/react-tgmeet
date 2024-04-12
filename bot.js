let tg = window.Telegram.WebApp;
let data = tg.initDataUnsafe;
tg.showAlert(`"Здарова, заебал", ${data.user.username}`);
tg.sendData(data.user.username);

localStorage.setItem("data", data);

console.log(localStorage.getItem("data"));
