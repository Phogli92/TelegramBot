import { keyboard, removeKeyboard } from "telegraf/markup";

export const openMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Menu dan bittasini tanlang", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "Havo haqida malumot olish",
            request_location: true,
          },
        ],
        ["Mushik rasm olish(Prikol)"],
        ["Yopish"],
      ],
    },
  });
};

export const closeMenu = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Menu yopildi", {
    reply_markup: {
      remove_keyboard: true,
    },
  });
};
