import { Injectable } from '@nestjs/common';
import { Markup, Telegraf } from 'telegraf';
import { SendInvoiceDto } from './dto/send-invoice.dto';

@Injectable()
export class UserInvoicesService {
  readonly bot: Telegraf;
  readonly adminChatId: string;

  constructor() {
    this.bot = new Telegraf(process.env.BOT_TOKEN);
    this.adminChatId = process.env.ADMIN_CHAT_ID;
  }

  async sendInvoiceToTGBot(botData: SendInvoiceDto) {
    const keyboard = Markup.inlineKeyboard([
      Markup.button.callback('✅ Выполнить', 'invoices:completed'),
    ]);
    await this.bot.telegram.sendMessage(
      this.adminChatId,
      this.getTextForInvoiceHTML(botData),
      { parse_mode: 'HTML', reply_markup: keyboard.reply_markup },
    );
  }

  private getTextForInvoiceHTML(botData: SendInvoiceDto) {
    return `<b>Пользователь запросил перевод</b>\n\nПользователь с ID <code>${botData.userId}</code> запросил вывод NFT ${botData.orderedCoin}\n\nКоличество монет: <b>${botData.amountOfCoin}</b>\n\nКошелек пользователя: <code>${botData.ethWallet}</code>\n\n<i>Кошелек пользователя легко скопировал кликом</i>`;
  }
}
