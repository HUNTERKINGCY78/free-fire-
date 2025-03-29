const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const BOT_TOKEN = "7489205161:AAG3OEyK1BF-H4ghLav9MLRgwfTssAPJOjc";  // Ganti dengan token bot Telegram
const ADMIN_CHAT_ID = "6471584924";  // Ganti dengan ID admin Telegram

app.use(bodyParser.json());

app.post("/detect", async (req, res) => {
    const deviceInfo = req.body;

    const message = `📱 *Perangkat Baru Terdeteksi!*\n\n` +
                    `🔹 *User Agent:* ${deviceInfo.userAgent}\n` +
                    `🔹 *Platform:* ${deviceInfo.platform}\n` +
                    `🔹 *Resolusi:* ${deviceInfo.screenWidth}x${deviceInfo.screenHeight}\n` +
                    `🔹 *Zona Waktu:* ${deviceInfo.timezone}`;

    // Kirim info ke bot Telegram
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: ADMIN_CHAT_ID,
        text: message,
        parse_mode: "Markdown"
    });

    res.json({ status: "success" });
});

// Jalankan server di port 3000
app.listen(3000, () => console.log("Server berjalan di port 3000"));
         
