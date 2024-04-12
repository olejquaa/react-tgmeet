let tg = window.Telegram.WebApp;
let data = tg.initDataUnsafe;
tg.showAlert(`"все работает", ${data.user.username}`);
tg.sendData(data.user.username);

localStorage.setItem("name", data.user.username);

console.log(localStorage.getItem("name"));
