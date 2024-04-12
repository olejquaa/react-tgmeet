const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "5048491816:AAF-tXoOCoDgdAjO0CTZ7SNbK-PxaR8IFK4";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Вот тебе письмо, старый мазафакер");
  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;

    if (msg?.web_app_data?.data) {
      try {
        const data = JSON.parse(msg?.web_app_data?.data);
        console.log(data);
        await bot.sendMessage(chatId, "Cегодня пидор: " + data?.user.username);
      } catch (e) {
        console.log(e);
      }
    }
  });
});

let tg = window.Telegram.WebApp;
let data = tg.initDataUnsafe;
tg.showAlert(`"все работает", ${data.user.username}`);
tg.sendData(data.user.username);

localStorage.setItem("name", data.user.username);

console.log(localStorage.getItem("name"));
