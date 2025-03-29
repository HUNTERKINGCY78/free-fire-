const TelegramBot = require("node-telegram-bot-api");

const BOT_TOKEN = "7489205161:AAG3OEyK1BF-H4ghLav9MLRgwfTssAPJOjc";  // Ganti dengan token bot
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const link = "apa coba";  // Ganti dengan link halaman HTML

    bot.sendMessage(chatId, `Klik link ini untuk subceribe :\n\n${link}`);
});

console.log("Bot Telegram berjalan...");
