import { Telegraf } from "telegraf";
import { config } from "./config.js";
import { openMenu, closeMenu } from "./menu.js";
import { getCat } from "./cat.js";
import { getWeather } from "./weather.js";
const bot = new Telegraf(config.telegramToken, {});

bot.start((ctx) => ctx.reply("Assalomu alaykum, Menu ochish uchun {menu} sozini chatga yozing"));

bot.on("message", async (ctx) => {
  const chatId = ctx.chat.id;

  if (ctx.message.text == "menu") {
    openMenu(bot, chatId);
  } else if (ctx.message.location) {
    let weather = await getWeather(ctx);
    ctx.reply(weather)
  } else if (ctx.message.text == "Mushik rasm olish(Prikol)") {
    let cat = await getCat();
    ctx.reply(cat)
  } else {
    closeMenu(bot, chatId);
  }
});

bot.launch();
