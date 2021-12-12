const {Telegraf, Markup, session, Scenes} = require('telegraf');
require('dotenv').config();
const consola = require('consola');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Start message
bot.start(async (ctx) => {
  const userName = ctx.message.from.first_name;
});

bot.action('invoices:completed', async (ctx) => {
  const newMessageText = `✅ ${ctx.update.callback_query.message.text}`
  await ctx.editMessageText(
    newMessageText,
    ctx.update.callback_query.from.id
  );
  await ctx.answerCbQuery(
    'Вы успешно обработали запрос',
    {show_alert: true},
  );
});

const START = async () => {
  await bot.launch();
  consola.success('Bot was started');
};

START();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
