const TelegramBot = require("node-telegram-bot-api");

const BOT_TOKEN = "7489205161:AAG3OEyK1BF-H4ghLav9MLRgwfTssAPJOjc";  // Ganti dengan token bot
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const link = "https://hunterkingcy78.github.io/free-fire-/TUTOR.html";  // Ganti dengan link halaman HTML

    bot.sendMessage(chatId, `Klik link ini untuk subceribe :\n\n${link}`);
});

console.log("Bot Telegram berjalan...");
